import { Signer } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import { expect } from "chai";
import { ethers, network } from "hardhat";

describe("Escrow", function () {

    describe("Deployment", function () {
        it("Anyone should be able to deploy", async function () {
        
            // fund random address with eth
            const random = Wallet.createRandom();
            await network.provider.send("hardhat_setBalance", [
                random.address,
                "0xfffffffffffffffff",
              ]);
        
            const signer = new ethers.Wallet(random, ethers.provider);
            
            const Escrow = await ethers.getContractFactory("Escrow", signer);
            const escrow = await Escrow.deploy();
            
            expect(await escrow.owner()).to.equal(signer.address);
        });
    });

});
