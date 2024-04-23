import type { WalletAccount } from "@wallet-standard/base";
import type { Signed } from "../types";

/** Name of the feature. */
export const MinaSignMessage = "mina:signMessage";

/**
 * A Wallet Standard feature for signing a message, and returning the
 * signed message bytes, and message signature.
 */
export type MinaSignMessageFeature = {
  /** Name of the feature. */
  readonly [MinaSignMessage]: {
    /** Version of the feature API. */
    readonly version: MinaSignMessageVersion;

    /** Method to call to use the feature. */
    readonly signMessage: MinaSignMessageMethod;
  };
};

/** Version of the feature. */
export type MinaSignMessageVersion = "1.0.0";

/** Sign a message using the account secret key */
export type MinaSignMessageMethod = (input: MinaSignMessageInput) => Promise<MinaSignMessageOutput>;

/** Input for signing a message. */
export interface MinaSignMessageInput {
  /** Message to sign. */
  readonly message: string;

  /** Optional account to use. */
  readonly account?: WalletAccount;
}

/** Output of signing a message. */
export interface MinaSignMessageOutput {
  /** Signed message object */
  readonly signedMessage: Signed<string>;
}
