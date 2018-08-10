module.exports = {
  networks: {
    external: {
      host: "0.0.0.0",    // external's node ip
      port: 8545,
      network_id: "*",    // Match any network id
      from: "",           // default account e.g. 0x000000000
      accountPassword: "" // default password
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",    // Match any network id
      from: "",           // default account e.g. 0x000000000
      accountPassword: "" // default password
    }
  }
};