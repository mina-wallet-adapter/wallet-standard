# `mina-wallet-standard`

Mina Protocol specific extensions to the [Wallet Standard](https://github.com/wallet-standard/wallet-standard).

## Standard Extensions

The Wallet Standard Extensions for Mina Protocol are defined as follows:

### Namespaces

- `mina:`

### Chains

- `mina:mainnet`
- `mina:devnet`
- `mina:berkeley`

### Features

- `mina:signMessage`
- `mina:signTransaction`
- `mina:sendTransaction`
- `mina:signAndSendTransaction`

## How to Build

0. Dependencies

- Node 16 or newer
- NPM

1. Clone this git repository and change to the project directory

```shell
git clone https://github.com/mina-wallet-adapter/wallet-standard.git
cd wallet-standard
```

2. Install project dependencies

```shell
npm install
```

3. Run below command to build.

```shell
npm build
```
