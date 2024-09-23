import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync";
require('dotenv').config();
const {
  MAINNET_PRIVATE_KEY,
  TESTNET_PRIVATE_KEY,
  LOCAL_PRIVATE_KEY,
  INFURA_API_KEY
} = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: "zkSyncSepoliaTestnet",
  networks: {
    zkSyncSepoliaTestnet: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
      accounts: [TESTNET_PRIVATE_KEY].filter(Boolean)
    },
    zkSyncMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
      verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
      accounts: [MAINNET_PRIVATE_KEY].filter(Boolean)
    },
    dockerizedNode: {
      url: "http://127.0.0.1:3050",
      ethNetwork: "http://127.0.0.1:8545",
      zksync: true,
      accounts: [LOCAL_PRIVATE_KEY].filter(Boolean)
    },
    inMemoryNode: {
      url: "http://127.0.0.1:8011",
      ethNetwork: "localhost", // in-memory node doesn't support eth node; removing this line will cause an error
      zksync: true,
      accounts: [LOCAL_PRIVATE_KEY].filter(Boolean)
    },
    localL1: {
      url: "http://127.0.0.1:8545",
      accounts: [LOCAL_PRIVATE_KEY].filter(Boolean)
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [TESTNET_PRIVATE_KEY].filter(Boolean)
    },
    hardhat: {
      zksync: true,
    },
  },
  zksolc: {
    version: "latest",
    settings: {
      // find all available options in the official documentation
      // https://docs.zksync.io/build/tooling/hardhat/hardhat-zksync-solc#configuration
    },
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
