// Pure classification: how healthy is one feed, given its heartbeat and its latest round.

export type Status = 'ok' | 'late' | 'stale' | 'paused' | 'invalid' | 'error';

/** Worst first. Used to sort the report. */
export const SEVERITY: Status[] = ['error', 'invalid', 'stale', 'late', 'paused', 'ok'];

export interface FeedMeta {
  name: string;
  address: string;
  heartbeat: number | null;
  decimals: number;
  /** Chainlink's market-hours label: 'Crypto' trades around the clock, the rest close. */
  marketHours: string | null;
  productType: string | null;
  category: string;
}

export interface Round {
  answer: bigint;
  updatedAt: number;
}

export interface Verdict {
  status: Status;
  ageSeconds: number | null;
  /** Age as a share of the heartbeat: 1 means the update is due now. */
  load: number | null;
  value: number | null;
  note: string;
}

/** Chainlink updates at the heartbeat or sooner; allow a little block and network slack. */
export const grace = (heartbeat: number) => Math.max(120, Math.round(heartbeat * 0.02));

export function classify(meta: FeedMeta, round: Round | null, now: number): Verdict {
  if (!round) return { status: 'error', ageSeconds: null, load: null, value: null, note: 'read failed' };

  const ageSeconds = now - round.updatedAt;
  const value = Number(round.answer) / 10 ** meta.decimals;
  const base = { ageSeconds, value, load: meta.heartbeat ? ageSeconds / meta.heartbeat : null };

  if (round.updatedAt === 0 || ageSeconds < -60) return { ...base, status: 'invalid', note: 'timestamp is zero or in the future' };
  if (meta.productType === 'Price' && round.answer <= 0n) return { ...base, status: 'invalid', note: 'price is zero or negative' };
  if (!meta.heartbeat) return { ...base, status: 'ok', note: 'no published heartbeat' };

  if (ageSeconds <= meta.heartbeat + grace(meta.heartbeat)) return { ...base, status: 'ok', note: '' };

  const tradesAllDay = !meta.marketHours || meta.marketHours === 'Crypto';
  if (!tradesAllDay) return { ...base, status: 'paused', note: `market-hours feed (${meta.marketHours}); old prices are expected while that market is closed` };

  if (ageSeconds <= meta.heartbeat * 2) return { ...base, status: 'late', note: 'past its heartbeat' };
  return { ...base, status: 'stale', note: 'more than two heartbeats without an update' };
}

export function summarize(verdicts: { status: Status }[]) {
  const counts = Object.fromEntries(SEVERITY.map((s) => [s, 0])) as Record<Status, number>;
  for (const v of verdicts) counts[v.status] += 1;
  return counts;
}
