// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HackathonManager is Ownable {

    enum HackathonState { UPCOMING, OPEN, CLOSED, CONCLUDED } 
    
    uint256 public _hackathonFundBalance;
    uint256 public _currentTrackTotal;
    uint256 public _totalPrizePool;
    address public _contractFactory;
    address public _hackOwner;
    string public _hackathonName;
    Prize[] prizeList;
    HackathonState _state;


    struct Participant {
        string _teamName;
        string _project;
        string _projectLink;
        bool _submitted;
        bool _isSubmissionValid;
        bool _isWinner;
        address _participantAddress;
    }

    struct Prize {
        string _name;
        Participant _winner;
        uint _amount;
        bool _paid;
    }

    struct Track {
        string _trackName;
        uint256 _trackPoolAmount;
        uint256 _currentPrizeTotal;
        Prize[] _prizes;
    }

    mapping (string => Track) _hackathonTracks;
    mapping (string => Participant) _hackathonParticipants;
    mapping (address => bool) _hackathonCommitteeMembers;
    mapping (string => bool) _prizeNameTaken;
    
    event HackathonCreated(string _hack, address _creator);
    event HackathonFunded(uint _amountFunded, uint _currentHackatonFundBalance);
    event TrackCreated(string _trackName, uint _totalPrizePool);
    event PrizeWinnerCaptured(string _track, string _prize, string _team);
    event PrizePaid(string _team, address _toAddress, uint256 _amount);
    event PrizeAddedToTrack(string _track, string _prize, uint256 _prizeAmount);
    event ParticipantRegistered(string _teamName);
    event ProjectSubmitted(string _teamName, string _project);
    event ProjectApproved(string _teamName, string _project, address _approver);
    event ProjectRejected(string _teamName, string _project, address _rejector);
    event CommitteeMemberAdded(address _newMember);
    event CommitteeMemberRemoved(address _oldMember);

    modifier onlyCommitteeMembers(address _member){
        require(_hackathonCommitteeMembers[_member] == true, "Only committee members can access this method!");
        _;
    }

    modifier shouldBeOpen(){
        require(_state == HackathonState.OPEN, "The hackathon is not open!");
        _;
    }

    modifier shouldBeClosed(){
        require(_state == HackathonState.CLOSED, "The hackathon should be closed!");
        _;
    }

    modifier cannotExceedFundedAmount(uint256 _amount){
        require(_currentTrackTotal + _amount <= _hackathonFundBalance, "Addition of this track exceeds the total available funds pool, please fund contract first!");
        _;
    }

    modifier trackPrizeTotalCannotExceedTrackPoolAmount(string memory _trackName, uint256 _amount){
        require(_hackathonTracks[_trackName]._currentPrizeTotal + _amount <= _hackathonTracks[_trackName]._trackPoolAmount, "Track prize total cannot exceed track prize pool");
        _;
    }

    modifier onlyParticipant(string memory _teamName){
        address _participant = _hackathonParticipants[_teamName]._participantAddress;
        require(_participant == msg.sender, "Only main participant/team lead can call this method");
        _;
    }

    modifier hasProjectBeenSubmitted(string memory _team){
        require(_hackathonParticipants[_team]._submitted == true, "Project has not been submitted!");
        _;
    }

     modifier projectIsValid(string memory _team){
        require(_hackathonParticipants[_team]._isSubmissionValid == true, "Project submission has not been validated or is invalid!");
        _;
    }

    modifier prizeNameShouldBeUnique(string memory _name){
        require(_prizeNameTaken[_name] != true, "Prize name should be unique!");
        _;
    }

    constructor (address _hackathonOwner, string memory _name) Ownable(){
        _contractFactory = msg.sender;
        _hackathonName = _name;
        Ownable.transferOwnership(_hackathonOwner);
        _hackOwner = _hackathonOwner;
        _hackathonCommitteeMembers[_hackathonOwner] = true;
        _state = HackathonState.UPCOMING;
        emit HackathonCreated(_name, _hackathonOwner);
    }

    function addCommitteeMember(address _newMember) public onlyOwner {
        _hackathonCommitteeMembers[_newMember] = true;
        emit CommitteeMemberAdded(_newMember);
    }

    function removeCommitteeMember(address _oldMember) public onlyOwner {
        _hackathonCommitteeMembers[_oldMember] = false;
        emit CommitteeMemberRemoved(_oldMember);
    }

    function setHackathonState(address _caller, uint8 _newState) public onlyCommitteeMembers(_caller) {
        require(_newState <= 3 && _newState >= 0, "Not a valid hackathon state!");
        _state = HackathonState(_newState);
    }

    function fundHackathon() external payable returns(uint256 _balance){
        _hackathonFundBalance += msg.value;
        _balance = _hackathonFundBalance;
        emit HackathonFunded(msg.value, _hackathonFundBalance);
    }

    function registerParticipant(string memory _teamName, string memory _projectName, string memory _projectLink) external shouldBeOpen {
        require(bytes(_hackathonParticipants[_teamName]._teamName).length == 0, "Team name already taken, please select a different name");
        require(bytes(_teamName).length > 0, "Please provide a team name!");
        _hackathonParticipants[_teamName] = Participant(_teamName, _projectName, _projectLink, false, false, false, msg.sender);
        emit ParticipantRegistered(_teamName);
    }

    function submitProject(string memory _team)external onlyParticipant(_team){
        _hackathonParticipants[_team]._submitted = true;
        emit ProjectSubmitted(_team, _hackathonParticipants[_team]._projectLink);
    }

    function validateTeamProject(string memory _team, bool isValid) external onlyCommitteeMembers(msg.sender) hasProjectBeenSubmitted(_team){
        _hackathonParticipants[_team]._isSubmissionValid = isValid;
        if (_hackathonParticipants[_team]._isSubmissionValid){
            emit ProjectApproved(_team, _hackathonParticipants[_team]._project, msg.sender);
        } else {
            emit ProjectRejected(_team, _hackathonParticipants[_team]._project, msg.sender);
        }
        
    }

    function trackExists(string memory _trackName) internal view returns(bool){
        if (_hackathonTracks[_trackName]._trackPoolAmount > 0){
            return true;
        }
        return false;
    }

    function createTrack(string memory _trackName, uint256 _trackPoolAmount) external cannotExceedFundedAmount(_trackPoolAmount) onlyCommitteeMembers(msg.sender) {
        require(!trackExists(_trackName), "This track already exists");
        Prize[] memory initPrizeList;
        _hackathonTracks[_trackName] = Track(_trackName, _trackPoolAmount, 0, initPrizeList);
        _currentTrackTotal += _trackPoolAmount;
        emit TrackCreated(_trackName, _trackPoolAmount);
    }

    function addPrizeToTrack(string memory _trackName, string memory _prizeName, uint256 _amount) external trackPrizeTotalCannotExceedTrackPoolAmount(_trackName, _amount) onlyCommitteeMembers(msg.sender) prizeNameShouldBeUnique(_prizeName){
        require(trackExists(_trackName), "The track mentioned does not exist");
        Participant memory initParticipant = Participant("", "", "", false, false, false, address(0));
        _hackathonTracks[_trackName]._prizes.push(Prize(_prizeName, initParticipant, _amount, false));
        _prizeNameTaken[_prizeName] = true;
        emit PrizeAddedToTrack(_trackName, _prizeName, _amount);
    }

    function captureWinner(string memory _track, string memory _prize, string memory _team) external onlyCommitteeMembers(msg.sender) shouldBeClosed hasProjectBeenSubmitted(_team) projectIsValid(_team){
        require(trackExists(_track), "The track mentioned does not exist!");
        require(_prizeNameTaken[_prize] == true, "The prize mentioned does not exist!");
        Participant memory winner = _hackathonParticipants[_team];
        winner._isWinner = true;
        Prize[] memory trackPrizes = _hackathonTracks[_track]._prizes;
        uint256 prizeIndex;
        for(uint256 i = 0; i < trackPrizes.length; i++){
            if (keccak256(bytes(trackPrizes[i]._name)) == keccak256(bytes(_prize))){
                prizeIndex = i;
            }
        }
        require(trackPrizes[prizeIndex]._paid != true, "Prize has already been paid");
        trackPrizes[prizeIndex]._winner = winner;
        emit PrizeWinnerCaptured(_track, _prize, _team);
        address payable receiver = payable(winner._participantAddress);
        trackPrizes[prizeIndex]._paid = true;
        receiver.transfer(trackPrizes[prizeIndex]._amount);
        emit PrizePaid(_team, receiver, trackPrizes[prizeIndex]._amount);
    }
}