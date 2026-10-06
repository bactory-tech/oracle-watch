// Reads every feed's latest round on Base in a few multicalls.

import { createPublicClient, http, parseAbi, type Address } from 'viem';
import { base } from 'viem/chains';
import type { Round } from './check.js';
import { SEQUENCER_FEED } from './feeds.js';

const abi = parseAbi([
  'function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)',
]);

const client = createPublicClient({ chain: base, transport: http(process.env.BASE_RPC_URL), batch: { multicall: { batchSize: 4096 } } });

export async function latestRounds(addresses: string[]): Promise<{ rounds: (Round | null)[]; block: bigint }> {
  const block = await client.getBlockNumber();
  const res = await client.multicall({
    contracts: addresses.map((address) => ({ address: address as Address, abi, functionName: 'latestRoundData' as const })),
    allowFailure: true,
    blockNumber: block,
  });
  const rounds = res.map((r) => (r.status === 'success' ? { answer: r.result[1], updatedAt: Number(r.result[3]) } : null));
  return { rounds, block };
}

/** Chainlink's L2 sequencer uptime feed: answer 0 means up; startedAt is when that status began. */
export async function sequencer() {
  const [, answer, startedAt] = await client.readContract({ address: SEQUENCER_FEED, abi, functionName: 'latestRoundData' });
  return { up: answer === 0n, since: Number(startedAt) };
}
