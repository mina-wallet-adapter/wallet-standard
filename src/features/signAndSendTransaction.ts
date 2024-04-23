import type { IdentifierString } from "@wallet-standard/base";
import type { MinaSignTransactionInput } from "./signTransaction.js";
import type { MinaSendTransactionOutput } from "./sendTransaction.js";

/** Name of the feature. */
export const MinaSignAndSendTransaction = "mina:signAndSendTransaction";

/**
 * A Wallet Standard feature for signing and sending a transaction.
 * The wallet is expected to submit the transaction to the network
 * and return the transaction hash.
 */
export type MinaSignAndSendTransactionFeature = {
  /** Name of the feature. */
  readonly [MinaSignAndSendTransaction]: {
    /** Version of the feature API. */
    readonly version: MinaSignAndSendTransactionVersion;

    /** Method to call to use the feature. */
    readonly signAndSendTransaction: MinaSignAndSendTransactionMethod;
  };
};

/** Version of the feature. */
export type MinaSignAndSendTransactionVersion = "1.0.0";

/** Sign and send a transaction method */
export type MinaSignAndSendTransactionMethod = (input: MinaSignAndSendTransactionInput) => Promise<MinaSignAndSendTransactionOutput>;

/** Input for signing and sending a transaction. */
export interface MinaSignAndSendTransactionInput extends MinaSignTransactionInput {
  /** Optional chain to use. */
  readonly chain?: IdentifierString;
}

/** Output of signing and sending a transaction. */
export interface MinaSignAndSendTransactionOutput extends MinaSendTransactionOutput {}
