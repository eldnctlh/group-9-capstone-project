import { ethers } from "hardhat";

async function main() {

  const HackathonManagerFactoryInstance = await ethers.getContractFactory("HackathonManagerFactory");
  const HackathonManagerFactoryContract = await HackathonManagerFactoryInstance.deploy();

  await HackathonManagerFactoryContract.deployed();

  console.log(`HackathonManagerFactory contract deployed at: ${HackathonManagerFactoryContract.address}`);

  // let tx = await HackathonManagerFactoryContract.createNewHack("new hack");
  // tx.wait();

  // let newHackAddress = await HackathonManagerFactoryContract.getHackContractAddress("new hack");
  // console.log(`[deploy test] A new hackathon by the name: new hack - at address ${newHackAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
