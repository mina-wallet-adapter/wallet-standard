import type { IdentifierString } from "@wallet-standard/base";

/** Mina networks */
export const MINA_MAINNET_CHAIN = "mina:mainnet";
export const MINA_DEVNET_CHAIN = "mina:devnet";
export const MINA_BERKELEY_CHAIN = "mina:berkeley";

/** Array of all networks */
export const MINA_CHAINS = [MINA_MAINNET_CHAIN, MINA_DEVNET_CHAIN, MINA_BERKELEY_CHAIN] as const;

/** Type of all networks */
export type MinaChain = (typeof MINA_CHAINS)[number];

/**
 * Check if a chain is one of the Mina networks
 */
export function isMinaChain(chain: IdentifierString): chain is MinaChain {
  return MINA_CHAINS.includes(chain as MinaChain);
}
