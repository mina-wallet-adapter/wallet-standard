import type { WalletAccount } from "@wallet-standard/base";
import type { SignableData, SignedAny } from "mina-signer/dist/node/mina-signer/src/TSTypes";

/** Name of the feature. */
export const MinaSignTransaction = "mina:signTransaction";

/**
 * A Wallet Standard feature for signing a transaction, and returning
 * the signed transaction with its signature.
 */
export type MinaSignTransactionFeature = {
  /** Name of the feature. */
  readonly [MinaSignTransaction]: {
    /** Version of the feature API. */
    readonly version: MinaSignTransactionVersion;

    /** Method to call to use the feature. */
    readonly signTransaction: MinaSignTransactionMethod;
  };
};

/** Version of the feature. */
export type MinaSignTransactionVersion = "1.0.0";

/** Sign a transaction method */
export type MinaSignTransactionMethod = (
  ...inputs: readonly MinaSignTransactionInput[]
) => Promise<readonly MinaSignTransactionOutput[]>;

/** Input for signing a transaction. */
export interface MinaSignTransactionInput {
  /** Transaction inputs to sign. */
  readonly transaction: SignableData;

  /** Optional account to use. */
  readonly account?: WalletAccount;
}

/** Output of signing a transaction. */
export interface MinaSignTransactionOutput {
  /** Signed transaction object. */
  readonly signedTransaction: SignedAny;
}
