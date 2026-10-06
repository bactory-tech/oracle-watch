// Every Chainlink data feed on Base, from Chainlink's own feed directory (the source behind docs.chain.link).

import type { FeedMeta } from './check.js';

const DIRECTORY = 'https://reference-data-directory.vercel.app/feeds-ethereum-mainnet-base-1.json';
export const SEQUENCER_FEED = '0xBCF85224fc0756B9Fa45aA7892530B47e10b6433';

interface Entry {
  name: string;
  proxyAddress: string | null;
  heartbeat?: number;
  decimals: number;
  feedCategory: string;
  docs?: { marketHours?: string; productType?: string; hidden?: boolean };
}

export async function loadFeeds(): Promise<FeedMeta[]> {
  const r = await fetch(DIRECTORY);
  if (!r.ok) throw new Error(`Chainlink feed directory: HTTP ${r.status}`);
  const entries = (await r.json()) as Entry[];
  return entries
    .filter((e) => e.proxyAddress && e.proxyAddress.toLowerCase() !== SEQUENCER_FEED.toLowerCase() && !e.docs?.hidden)
    .map((e) => ({
      name: e.name,
      address: e.proxyAddress as string,
      heartbeat: e.heartbeat ?? null,
      decimals: e.decimals,
      marketHours: e.docs?.marketHours ?? null,
      productType: e.docs?.productType ?? null,
      category: e.feedCategory || 'unlisted',
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
