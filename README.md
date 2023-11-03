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
- `mina:signAndSendTransaction`

## How to Build

0. Pre-requisites

- Node 16+
- NPM

1. Clone this git repository and change to the project directory

```shell
git clone https://github.com/aztemi/mina-wallet-standard.git
cd mina-wallet-standard
```

2. Install project dependencies

```shell
npm install
```

3. Run below command to build all workspace packages.

```shell
npm build
```
