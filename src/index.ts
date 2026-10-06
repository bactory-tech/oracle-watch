// Checks every Chainlink feed on Base and writes the report into README.md and data/.

import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { classify, summarize } from './check.js';
import { loadFeeds } from './feeds.js';
import { latestRounds, sequencer } from './chain.js';
import { report, type Row } from './render.js';

const START = '<!-- report:start -->';
const END = '<!-- report:end -->';

const feeds = await loadFeeds();
const [{ rounds, block }, seq] = await Promise.all([latestRounds(feeds.map((f) => f.address)), sequencer()]);
const now = Math.floor(Date.now() / 1000);

const rows: Row[] = feeds.map((f, i) => ({ ...f, ...classify(f, rounds[i] ?? null, now) }));
const counts = summarize(rows);

const readme = await readFile('README.md', 'utf8');
const a = readme.indexOf(START), b = readme.indexOf(END);
if (a < 0 || b < a) throw new Error('README.md needs the report:start and report:end markers');
await writeFile('README.md', readme.slice(0, a + START.length) + '\n' + report(rows, counts, seq, now, block) + '\n' + readme.slice(b));

await mkdir('data', { recursive: true });
const checkedAt = new Date(now * 1000).toISOString();
await writeFile('data/status.json', JSON.stringify({
  checkedAt, block: block.toString(), sequencer: seq, counts,
  feeds: rows.map((r) => ({ name: r.name, address: r.address, status: r.status, value: r.value, ageSeconds: r.ageSeconds, heartbeat: r.heartbeat, marketHours: r.marketHours, note: r.note || undefined })),
}, null, 2) + '\n');

if (!existsSync('data/history.csv')) await writeFile('data/history.csv', 'checked_at,block,feeds,ok,paused,late,stale,invalid,error,sequencer_up\n');
await appendFile('data/history.csv', [checkedAt, block, rows.length, counts.ok, counts.paused, counts.late, counts.stale, counts.invalid, counts.error, seq.up].join(',') + '\n');

console.log(`${checkedAt} block ${block}: ${rows.length} feeds`, counts, `sequencer ${seq.up ? 'up' : 'down'}`);
if (process.argv.includes('--strict') && counts.stale + counts.invalid + counts.error > 0) process.exit(1);
