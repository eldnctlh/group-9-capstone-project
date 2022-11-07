import { Signer } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import { expect } from "chai";
import { ethers, network } from "hardhat";

describe("HackathonManagerFactory", function () {

    describe("Deployment", function () {
        it("Deployer is Owner of HacatonManagerFactory", async function () {
        
            // fund random address with eth
            const random = Wallet.createRandom();
            await network.provider.send("hardhat_setBalance", [
                random.address,
                "0xfffffffffffffffff",
              ]);
        
            const signer = new ethers.Wallet(random, ethers.provider);
            
            const HackathonManagerFactory = await ethers.getContractFactory("HackathonManagerFactory", signer);
            const hackathonManagerFactory = await HackathonManagerFactory.deploy();
            
            
            expect(await hackathonManagerFactory.Owner()).to.equal(signer.address);
        });

        it("Triggers the HackCreated Event when a hack is created", async function () {
            const HackathonManagerFactory = await ethers.getContractFactory("HackathonManagerFactory");
            const hackathonManagerFactory = await HackathonManagerFactory.deploy();
            
            const hackName = "new hack";

            await expect(hackathonManagerFactory.createNewHack(hackName))
                .to.emit(hackathonManagerFactory,"HackCreated");
        });
            
        it("Reverts when deploymentfee too low", async function() {

            const HackathonManagerFactory = await ethers.getContractFactory("HackathonManagerFactory");
            const hackathonManagerFactory = await HackathonManagerFactory.deploy();
            
            const hackName = "revert hack";

            // TODO: add value to setFee
            await hackathonManagerFactory.setFee();
            
            await expect(hackathonManagerFactory.createNewHack(hackName, {value: 10}))
                .to.revertedWithoutReason();
        } );
    });

});
