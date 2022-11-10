import { Signer } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { HackathonManager } from "../typechain-types";

describe("HackathonManager", function () {

    let hackatonManager : HackathonManager;
    let hackatonOwner : any;
    const trackName = "Super Winner";
    
    beforeEach(async function() {
        
        [hackatonOwner] = await ethers.getSigners();
        const hackatonName = "name";
        const HackathonManager = await ethers.getContractFactory("HackathonManager");
        
        hackatonManager = await HackathonManager.deploy(hackatonOwner.address, hackatonName);
        
        await hackatonManager.fundHackathon({value: 200});
        
    });
    
    it("CreateTrack emits TrackCreated", async function() {
        
        
        await expect(hackatonManager.createTrack(trackName, 1))
        .to.emit(hackatonManager,"TrackCreated");
    });
    
    it ("Prizes can be added to a 'Track' after funded", async function() {

        const prizeName = "1 million dollar bounty";
        const tx = await hackatonManager.createTrack(trackName, 100);
        await tx.wait();

        await expect( hackatonManager.addPrizeToTrack(trackName, prizeName, 1))
            .to.emit(hackatonManager, "PrizeAddedToTrack")
            .withArgs(trackName, prizeName,1);

        
    });


    it ("Participants cannot register when hackaton not open ", async function () {

        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
        .to.revertedWith('Hackathon not open!');

    });

    it ("Participants can register when hackaton OPEN ", async function () {

        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        const stateBefore =await  hackatonManager._state();
        expect(stateBefore).to.equal(0);

        const tx = await hackatonManager.setHackathonState(1);
        await tx.wait();

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
            .to.emit(hackatonManager, "ParticipantRegistered");

        const stateAfter =await  hackatonManager._state();
        expect(stateAfter).to.equal(1);
    
    });


    it ("Should be able to get state of hackaton", async function() {

        const state =await  hackatonManager._state();
        console.log("State: " + state);
    });


    it ("Registered participants can submit project", async function() {
        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        const tx = await hackatonManager.setHackathonState(1);
        await tx.wait();

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
            .to.emit(hackatonManager, "ParticipantRegistered");

        await expect( hackatonManager.submitProject(teamname))
            .to.emit(hackatonManager, "ProjectSubmitted")
            .withArgs(teamname, projectlink);

    });

    it ("Submitted project can be validated (Approved)", async () => {

        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        const tx = await hackatonManager.setHackathonState(1);
        await tx.wait();

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
            .to.emit(hackatonManager, "ParticipantRegistered");

        await expect( hackatonManager.submitProject(teamname))
            .to.emit(hackatonManager, "ProjectSubmitted")
            .withArgs(teamname, projectlink);

        await expect (hackatonManager.validateTeamProject(teamname, true))
            .to.emit(hackatonManager, "ProjectApproved")
            .withArgs(teamname,projectname, hackatonOwner.address);

    })

    it ("Submitted project can be validated (Rejected)", async () => {

        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        const tx = await hackatonManager.setHackathonState(1);
        await tx.wait();

        await expect(hackatonManager.registerParticipant(teamname, projectname, projectlink))
            .to.emit(hackatonManager, "ParticipantRegistered");

        await expect( hackatonManager.submitProject(teamname))
            .to.emit(hackatonManager, "ProjectSubmitted")
            .withArgs(teamname, projectlink);

        await expect (hackatonManager.validateTeamProject(teamname, false))
            .to.emit(hackatonManager, "ProjectRejected")
            .withArgs(teamname,projectname, hackatonOwner.address);

    })

    it("Capture winner emits ['prize paid']", async () => {


        // create track with a 1 million dollar bounty!
        const prizeName = "1 million dollar bounty";
        const prizeAmount = 5;
        const tx = await hackatonManager.createTrack(trackName, 100);
        await tx.wait();

        // add prize to track
        await (await hackatonManager.addPrizeToTrack(trackName, prizeName, prizeAmount)).wait();
            

        // set hackaton state to open
        await (await hackatonManager.setHackathonState(1)).wait();
        
        // participant registers
        const teamname = "Team 9";
        const projectname = "Wen bounty?";
        const projectlink = "https://localhost:3000";

        await (await hackatonManager.registerParticipant(teamname, projectname, projectlink)).wait();
            


        // participant submits project
        await (await hackatonManager.submitProject(teamname)).wait();


        // commitee validates team project
        await (await (hackatonManager.validateTeamProject(teamname, true))).wait();
        

        // set hackaton state to closed
        await (await hackatonManager.setHackathonState( 2)).wait();

        // capture winner
        await expect(hackatonManager.captureWinner(trackName,prizeName, teamname))
            .to.emit(hackatonManager,"PrizePaid" )
            .to.changeEtherBalance(hackatonOwner.address, prizeAmount);

        
    });

});
