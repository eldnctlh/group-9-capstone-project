import { Signer } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { HackathonManager } from "../typechain-types";

describe("HackathonManager", function () {

    let hackatonManager : HackathonManager;

    beforeEach(async function() {

        const [hackatonOwner] = await ethers.getSigners();
        const hackatonName = "name";
        const HackathonManager = await ethers.getContractFactory("HackathonManager");

        hackatonManager = await HackathonManager.deploy(hackatonOwner.address, hackatonName);

        await hackatonManager.fundHackathon({value: 2});
              
    });

    it("CreateTrack emits TrackCreated", async function() {
 
        const trackName = "Super Winner";

        await expect(hackatonManager.createTrack(trackName, 1))
            .to.emit(hackatonManager,"TrackCreated");
    });

});
