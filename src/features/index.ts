import type { WalletWithFeatures } from "@wallet-standard/base";

import type { MinaSignMessageFeature } from "./signMessage";
import type { MinaSignTransactionFeature } from "./signTransaction";
import type { MinaSendTransactionFeature } from "./sendTransaction";
import type { MinaSignAndSendTransactionFeature } from "./signAndSendTransaction";

/** Type alias for Mina wallet features */
export type MinaFeatures =
  | MinaSignMessageFeature
  | MinaSignTransactionFeature
  | MinaSendTransactionFeature
  | MinaSignAndSendTransactionFeature;

/** Wallet with Mina features */
export type WalletWithMinaFeatures = WalletWithFeatures<MinaFeatures>;

export * from "./signMessage";
export * from "./signTransaction";
export * from "./sendTransaction";
export * from "./signAndSendTransaction";
