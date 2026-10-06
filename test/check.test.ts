import { describe, expect, it } from 'vitest';
import { classify, grace, summarize, type FeedMeta } from '../src/check.js';
import { duration } from '../src/render.js';

const now = 1_800_000_000;
const eth: FeedMeta = { name: 'ETH / USD', address: '0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70', heartbeat: 1200, decimals: 8, marketHours: 'Crypto', productType: 'Price', category: 'low' };
const round = (age: number, answer = 2_700_00000000n) => ({ answer, updatedAt: now - age });

describe('classify', () => {
  it('is ok within the heartbeat plus grace', () => {
    expect(classify(eth, round(1200 + grace(1200)), now).status).toBe('ok');
    expect(classify(eth, round(30), now)).toMatchObject({ status: 'ok', value: 2700, ageSeconds: 30 });
  });

  it('is late past the heartbeat, stale past two', () => {
    expect(classify(eth, round(1500), now).status).toBe('late');
    expect(classify(eth, round(2400), now).status).toBe('late');
    expect(classify(eth, round(2401), now).status).toBe('stale');
  });

  it('pauses market-hours feeds instead of calling them stale', () => {
    const tsla = { ...eth, name: 'TSLA / USD', heartbeat: 86400, marketHours: 'us_equities_24/5' };
    expect(classify(tsla, round(3 * 86400), now).status).toBe('paused');
  });

  it('flags non-positive prices and bad timestamps', () => {
    expect(classify(eth, round(10, 0n), now).status).toBe('invalid');
    expect(classify(eth, { answer: 1n, updatedAt: 0 }, now).status).toBe('invalid');
    expect(classify(eth, round(-3600), now).status).toBe('invalid');
  });

  it('allows negative values on non-price feeds', () => {
    const gdp = { ...eth, name: 'Real GDP — Percent Change', productType: 'Macroeconomics', heartbeat: 3024000 };
    expect(classify(gdp, round(100, -5n), now).status).toBe('ok');
  });

  it('reports a failed read as an error', () => {
    expect(classify(eth, null, now).status).toBe('error');
  });

  it('counts every status', () => {
    expect(summarize([{ status: 'ok' }, { status: 'ok' }, { status: 'stale' }])).toMatchObject({ ok: 2, stale: 1, late: 0 });
  });
});

describe('duration', () => {
  it('formats compactly', () => {
    expect([duration(45), duration(600), duration(3720), duration(90000), duration(null)]).toEqual(['45s', '10m', '1h 2m', '1d 1h', '—']);
  });
});
