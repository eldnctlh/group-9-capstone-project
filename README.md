# [WenBounty](https://wenbounty.zzzy.io/)

Hackathon Management and Real-time Prize Distribution

---

## Problem

Prize distribution in hackathons is extremely delayed and so tedious that it can take months, and every winner gets frustrated. The organizing committee is equally tired of constantly following up with the sponsors and updating participants. While sponsors don't have a clear view on what's the optimum amount they should spend in a hackathon.

---

## Solution

WenBounty simplifies managing hackathons through an automated realtime prize distribution system.

**Sponsors can:**

- add prize money to a smart contract pool (escrow),
- create multiple tracks,
- Increase track/overall prize during the hackathon
- Details about hackathon and their offerings

**Selecting Winners**  
As soon as the hackathon ends and projects are submitted, both parties (sponsor and organizer) can select the winners. Winners can be finalized by signing a multi-sig transaction between sponsor and hackathon organizer.

This system adds transparency to the entire system and will **Benefit Everyone** in the following ways:

- **Participants**: speedy & automated prize distribution; clear view of which track makes both technical and financial sense in participating

- **Sponsors**: Optimize prize money like an auction - start with a small fund & add more basis response from participants

- **Organizers**: Freedom from constantly following up with sponsors and answering participants the same redundant question - Where's my Prize?

### **A Win-Win For All!**

---

## Repository Information

This monorepo contains the Front-end and the smart contracts for our WenBounty Project. The monorepo contains 2 directories:

### dapp

TS, React, Next.js, ethers.js, tailwind css

### contracts

Solidity, Hardhat, ethers.js, Mocha + TS for testing

# Getting started

To run the dapp:

_Make sure you're connected to AltLayer Dev Network_

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

---

## Our Team

- [Raushan Sharma](https://www.linkedin.com/in/raushansharma/)
- [Leon de Pruyssenaere de la Woestijne](https://www.linkedin.com/in/leonpw/)
- [Issa Kalonji](https://www.linkedin.com/in/issa-kalonji-b301851ba/)
- [Andrii Zahonenko](https://www.linkedin.com/in/andrii-zahonenko-23839515a/)
- [Aashir Sohail](https://www.linkedin.com/in/aashir-sohail/)

---
