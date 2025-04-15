require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",    // Localhost
      port: 8545,           // Ganache GUI
      network_id: "*",      // Match any network ID
      gas: 5500000,               // Gas limit
      // confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    // sepolia: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       process.env.PRIVATE_KEY,
    //       `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    //     ),
    //   network_id: 11155111,       // Sepolia's network ID
    //   gas: 5500000,               // Gas limit
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    // },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",       // Match your contract version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  },

  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
