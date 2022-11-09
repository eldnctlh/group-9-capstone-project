# group-9-capstone-project





This monorepo contains the Front-end and the smart contracts for our Encode Capstone project of Group 9 (7pm). The monorepo contains 2 directories:

###  dapp
TS, React, Next.js, ethers.js, tailwind css


### contracts

Solidity, Hardhat, ethers.js, Mocha + TS for testing


# Getting started
To run the dapp:
```
cd dapp && yarn dev
```

To compile the smart contracts:
```
cd contracts
yarn hardhat compile
```

To run the tests:
```
cd contracts
yarn hardhat test
```

It should look like this:

![Test](testing.png)



Our software stack:
- Typescript
- Solidity
- Mocha for testing
- Next
- React