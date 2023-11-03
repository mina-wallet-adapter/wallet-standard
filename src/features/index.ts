import type { WalletWithFeatures } from "@wallet-standard/base";

import type { MinaSignMessageFeature } from "./signMessage";
import type { MinaSignTransactionFeature } from "./signTransaction";
import type { MinaSignAndSendTransactionFeature } from "./signAndSendTransaction";

/** Type alias for Mina wallet features */
export type MinaFeatures = MinaSignMessageFeature | MinaSignTransactionFeature | MinaSignAndSendTransactionFeature;

/** Wallet with Mina features */
export type WalletWithMinaFeatures = WalletWithFeatures<MinaFeatures>;

export * from "./signMessage";
export * from "./signTransaction";
export * from "./signAndSendTransaction";
