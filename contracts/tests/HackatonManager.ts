import { Signer } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { HackathonManager } from "../typechain-types";

describe("HackathonManager", function () {

    let hackatonManager : HackathonManager;
    let hackatonOwner : any;

    beforeEach(async function() {

        [hackatonOwner] = await ethers.getSigners();
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

    it ("Participants cannot register when hackaton not open ", async function () {

        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
        .to.revertedWith('The hackathon is not open!');

    });

    it ("Participants can register when hackaton OPEN ", async function () {

        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        const tx = await hackatonManager.setHackathonState(hackatonOwner.address, 1);
        await tx.wait();

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
            .to.emit(hackatonManager, "ParticipantRegistered");
    });



});
