require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/SZPy-9k42qWOXPgyz_w25ZpXGdUhgx5Q',
      accounts: ['a92794d26a0fbc9ff330dd357f1f09f3717859e0f96cf8b4478d53e167370a3a'],
    },
  },
};