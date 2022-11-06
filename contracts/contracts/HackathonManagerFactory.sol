// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./HackathonManager.sol";

contract HackathonManagerFactory {

    address public Owner;
    uint256 public deploymentFee;
    mapping (string => HackathonManager) deployedHackathonManagerContractMapping;

    event HackCreated(address _contractAddress);

    constructor(){
        Owner = msg.sender;
    }

    function setFee() public view{
        require(msg.sender == Owner, "Only owner can set a fee");
    }

    function createNewHack(string memory _name) external payable returns(address _address){
        require(msg.value >= deploymentFee);
        HackathonManager newDeployed = new HackathonManager(msg.sender, _name);
        deployedHackathonManagerContractMapping[_name] = newDeployed;
        _address = address(newDeployed);
        emit HackCreated(_address);
    }
}