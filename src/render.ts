// Markdown for the README report.

import { SEVERITY, type FeedMeta, type Status, type Verdict } from './check.js';

export interface Row extends FeedMeta, Verdict {}

const LABEL: Record<Status, string> = {
  ok: '🟢 ok', late: '🟡 late', stale: '🔴 stale', paused: '⏸️ paused', invalid: '⚠️ invalid', error: '⚠️ error',
};

export function duration(s: number | null): string {
  if (s === null) return '—';
  if (s < 0) return '0s';
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;
  return `${Math.floor(s / 86400)}d ${Math.floor((s % 86400) / 3600)}h`;
}

function value(v: number | null): string {
  if (v === null) return '—';
  const a = Math.abs(v);
  const digits = a >= 1000 ? 2 : a >= 1 ? 4 : 8;
  return v.toLocaleString('en-US', { maximumFractionDigits: digits });
}

const link = (r: Row) => `[${r.name}](https://basescan.org/address/${r.address})`;
const bySeverity = (a: Row, b: Row) => SEVERITY.indexOf(a.status) - SEVERITY.indexOf(b.status) || (b.load ?? 0) - (a.load ?? 0);

export function report(rows: Row[], counts: Record<Status, number>, seq: { up: boolean; since: number }, now: number, block: bigint): string {
  const when = new Date(now * 1000).toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
  const out: string[] = [];

  out.push(`**Last check:** ${when} · block [${block}](https://basescan.org/block/${block}) · ${rows.length} feeds`);
  out.push('');
  out.push(`**Base sequencer:** ${seq.up ? '🟢 up' : '🔴 down'} since ${new Date(seq.since * 1000).toISOString().slice(0, 10)} (${duration(now - seq.since)})`);
  out.push('');
  out.push('| 🟢 ok | ⏸️ paused | 🟡 late | 🔴 stale | ⚠️ invalid | ⚠️ error |');
  out.push('| ---: | ---: | ---: | ---: | ---: | ---: |');
  out.push(`| ${counts.ok} | ${counts.paused} | ${counts.late} | ${counts.stale} | ${counts.invalid} | ${counts.error} |`);
  out.push('');

  const issues = rows.filter((r) => r.status !== 'ok' && r.status !== 'paused').sort(bySeverity);
  out.push('### Needs attention');
  out.push('');
  if (!issues.length) out.push('Nothing. Every crypto feed updated within its heartbeat.');
  else {
    out.push('| Feed | Status | Age | Heartbeat | Note |');
    out.push('| --- | --- | ---: | ---: | --- |');
    for (const r of issues) out.push(`| ${link(r)} | ${LABEL[r.status]} | ${duration(r.ageSeconds)} | ${duration(r.heartbeat)} | ${r.note} |`);
  }
  out.push('');

  const close = rows.filter((r) => r.status === 'ok' && r.load !== null).sort((a, b) => (b.load ?? 0) - (a.load ?? 0)).slice(0, 5);
  if (close.length) {
    out.push('### Closest to their heartbeat');
    out.push('');
    out.push('| Feed | Age | Heartbeat | Used |');
    out.push('| --- | ---: | ---: | ---: |');
    for (const r of close) out.push(`| ${link(r)} | ${duration(r.ageSeconds)} | ${duration(r.heartbeat)} | ${Math.round((r.load ?? 0) * 100)}% |`);
    out.push('');
  }

  out.push(`<details><summary><b>All ${rows.length} feeds</b></summary>`);
  out.push('');
  out.push('| Feed | Value | Age | Heartbeat | Status |');
  out.push('| --- | ---: | ---: | ---: | --- |');
  for (const r of rows) out.push(`| ${link(r)} | ${value(r.value)} | ${duration(r.ageSeconds)} | ${duration(r.heartbeat)} | ${LABEL[r.status]} |`);
  out.push('');
  out.push('</details>');
  return out.join('\n');
}
