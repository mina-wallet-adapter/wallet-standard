import type { IdentifierString } from "@wallet-standard/base";
import type { MinaSignTransactionOutput } from "./signTransaction.js";

/** Name of the feature. */
export const MinaSendTransaction = "mina:sendTransaction";

/**
 * A Wallet Standard feature for sending a transaction.
 * The wallet is expected to submit the transaction to the network
 * and return the transaction hash.
 */
export type MinaSendTransactionFeature = {
  /** Name of the feature. */
  readonly [MinaSendTransaction]: {
    /** Version of the feature API. */
    readonly version: MinaSendTransactionVersion;

    /** Method to call to use the feature. */
    readonly sendTransaction: MinaSendTransactionMethod;
  };
};

/** Version of the feature. */
export type MinaSendTransactionVersion = "1.0.0";

/** Sign and send a transaction method */
export type MinaSendTransactionMethod = (
  ...inputs: readonly MinaSendTransactionInput[]
) => Promise<readonly MinaSendTransactionOutput[]>;

/** Input for sending a transaction. */
export interface MinaSendTransactionInput extends MinaSignTransactionOutput {
  /** Optional chain to use. */
  readonly chain?: IdentifierString;
}

/** Output of sending a transaction. */
export interface MinaSendTransactionOutput {
  /** Transaction signature, as string on success. */
  readonly signature: string | undefined;
}
