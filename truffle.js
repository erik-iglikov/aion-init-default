module.exports = {
  networks: {
    external: {
      host: "13.66.210.204",
      port: 8545,
      network_id: "128", // Match any network id
      from: "0xa04be405fe794146df4a6a0cac0009933323d65e29dedfaf80a1f880fa8cd329", // default account
      accountPassword: "PLAT4life" // default password
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "128", // Match any network id
      from: "0xa04be405fe794146df4a6a0cac0009933323d65e29dedfaf80a1f880fa8cd329", // default account
      accountPassword: "PLAT4life" // default password
    }
  }
};