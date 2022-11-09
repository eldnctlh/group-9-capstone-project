export default {
    _format: "hh-sol-artifact-1",
    contractName: "HackathonManager",
    sourceName: "contracts/HackathonManager.sol",
    abi: [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_hackathonOwner",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "_name",
                    type: "string",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "_newMember",
                    type: "address",
                },
            ],
            name: "CommitteeMemberAdded",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "_oldMember",
                    type: "address",
                },
            ],
            name: "CommitteeMemberRemoved",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_hack",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "_creator",
                    type: "address",
                },
            ],
            name: "HackathonCreated",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_amountFunded",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_currentHackatonFundBalance",
                    type: "uint256",
                },
            ],
            name: "HackathonFunded",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_teamName",
                    type: "string",
                },
            ],
            name: "ParticipantRegistered",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_track",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "_prize",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_prizeAmount",
                    type: "uint256",
                },
            ],
            name: "PrizeAddedToTrack",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_team",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "_toAddress",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "PrizePaid",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_track",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "_prize",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "_team",
                    type: "string",
                },
            ],
            name: "PrizeWinnerCaptured",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_teamName",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "_project",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "_approver",
                    type: "address",
                },
            ],
            name: "ProjectApproved",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_teamName",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "_project",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "_rejector",
                    type: "address",
                },
            ],
            name: "ProjectRejected",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_teamName",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "_project",
                    type: "string",
                },
            ],
            name: "ProjectSubmitted",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "_trackName",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_totalPrizePool",
                    type: "uint256",
                },
            ],
            name: "TrackCreated",
            type: "event",
        },
        {
            inputs: [],
            name: "_contractFactory",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "_currentTrackTotal",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "_hackOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "_hackathonCommitteeMembers",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "_hackathonFundBalance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "_hackathonName",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            name: "_hackathonParticipants",
            outputs: [
                {
                    internalType: "string",
                    name: "_teamName",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_project",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_projectLink",
                    type: "string",
                },
                {
                    internalType: "bool",
                    name: "_submitted",
                    type: "bool",
                },
                {
                    internalType: "bool",
                    name: "_isSubmissionValid",
                    type: "bool",
                },
                {
                    internalType: "bool",
                    name: "_isWinner",
                    type: "bool",
                },
                {
                    internalType: "address",
                    name: "_participantAddress",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            name: "_hackathonTracks",
            outputs: [
                {
                    internalType: "string",
                    name: "_trackName",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_trackPoolAmount",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_currentPrizeTotal",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            name: "_prizeNameTaken",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "_state",
            outputs: [
                {
                    internalType: "enum HackathonManager.HackathonState",
                    name: "",
                    type: "uint8",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "_totalPrizePool",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_newMember",
                    type: "address",
                },
            ],
            name: "addCommitteeMember",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_trackName",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_prizeName",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "addPrizeToTrack",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_track",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_prize",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_team",
                    type: "string",
                },
            ],
            name: "captureWinner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_newTrackName",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_newTrackPoolAmount",
                    type: "uint256",
                },
            ],
            name: "createTrack",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "fundHackathon",
            outputs: [
                {
                    internalType: "uint256",
                    name: "_balance",
                    type: "uint256",
                },
            ],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_teamName",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_projectName",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_projectLink",
                    type: "string",
                },
            ],
            name: "registerParticipant",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_oldMember",
                    type: "address",
                },
            ],
            name: "removeCommitteeMember",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_caller",
                    type: "address",
                },
                {
                    internalType: "uint8",
                    name: "_newState",
                    type: "uint8",
                },
            ],
            name: "setHackathonState",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_team",
                    type: "string",
                },
            ],
            name: "submitProject",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_team",
                    type: "string",
                },
                {
                    internalType: "bool",
                    name: "isValid",
                    type: "bool",
                },
            ],
            name: "validateTeamProject",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    bytecode:
        "0x60806040523480156200001157600080fd5b50604051620046cb380380620046cb8339818101604052810190620000379190620005de565b620000576200004b620001ca60201b60201c565b620001d260201b60201c565b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060069081620000a991906200088f565b50620000c0826200029660201b6200203b1760201c565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600760006101000a81548160ff0219169083600381111562000182576200018162000976565b5b02179055507fa463e4d539d03f9a58eadb52f8d2bed47003b2e8a2ac1cf37365e129fbf16e608183604051620001ba92919062000a08565b60405180910390a1505062000b46565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002a66200032c60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000318576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200030f9062000ab2565b60405180910390fd5b6200032981620001d260201b60201c565b50565b6200033c620001ca60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000362620003bd60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620003bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003b29062000b24565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200042782620003fa565b9050919050565b62000439816200041a565b81146200044557600080fd5b50565b60008151905062000459816200042e565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004b48262000469565b810181811067ffffffffffffffff82111715620004d657620004d56200047a565b5b80604052505050565b6000620004eb620003e6565b9050620004f98282620004a9565b919050565b600067ffffffffffffffff8211156200051c576200051b6200047a565b5b620005278262000469565b9050602081019050919050565b60005b838110156200055457808201518184015260208101905062000537565b60008484015250505050565b6000620005776200057184620004fe565b620004df565b90508281526020810184848401111562000596576200059562000464565b5b620005a384828562000534565b509392505050565b600082601f830112620005c357620005c26200045f565b5b8151620005d584826020860162000560565b91505092915050565b60008060408385031215620005f857620005f7620003f0565b5b6000620006088582860162000448565b925050602083015167ffffffffffffffff8111156200062c576200062b620003f5565b5b6200063a85828601620005ab565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200069757607f821691505b602082108103620006ad57620006ac6200064f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620006d8565b620007238683620006d8565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620007706200076a62000764846200073b565b62000745565b6200073b565b9050919050565b6000819050919050565b6200078c836200074f565b620007a46200079b8262000777565b848454620006e5565b825550505050565b600090565b620007bb620007ac565b620007c881848462000781565b505050565b5b81811015620007f057620007e4600082620007b1565b600181019050620007ce565b5050565b601f8211156200083f576200080981620006b3565b6200081484620006c8565b8101602085101562000824578190505b6200083c6200083385620006c8565b830182620007cd565b50505b505050565b600082821c905092915050565b6000620008646000198460080262000844565b1980831691505092915050565b60006200087f838362000851565b9150826002028217905092915050565b6200089a8262000644565b67ffffffffffffffff811115620008b657620008b56200047a565b5b620008c282546200067e565b620008cf828285620007f4565b600060209050601f831160018114620009075760008415620008f2578287015190505b620008fe858262000871565b8655506200096e565b601f1984166200091786620006b3565b60005b8281101562000941578489015182556001820191506020850194506020810190506200091a565b868310156200096157848901516200095d601f89168262000851565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b6000620009c38262000644565b620009cf8185620009a5565b9350620009e181856020860162000534565b620009ec8162000469565b840191505092915050565b62000a02816200041a565b82525050565b6000604082019050818103600083015262000a248185620009b6565b905062000a356020830184620009f7565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000a9a602683620009a5565b915062000aa78262000a3c565b604082019050919050565b6000602082019050818103600083015262000acd8162000a8b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000b0c602083620009a5565b915062000b198262000ad4565b602082019050919050565b6000602082019050818103600083015262000b3f8162000afd565b9050919050565b613b758062000b566000396000f3fe60806040526004361061014b5760003560e01c806389170d03116100b6578063cf26fe661161006f578063cf26fe6614610472578063e7f1f953146104af578063e94ab878146104d8578063eb652fdc146104f6578063f2fde38b14610521578063ff4c64621461054a5761014b565b806389170d031461035a5780638da5cb5b1461039d5780638ed3a54e146103c8578063a1cb31b7146103f1578063af2965d01461041c578063bbb6fa7f146104475761014b565b80636367d993116101085780636367d99314610274578063715018a61461029d578063715c65b5146102b45780637fad0d48146102df578063832cc51f1461030857806387a86070146103315761014b565b8063039e0adc1461015057806311996ce81461018f578063140c979a146101ba5780631434e899146101f75780632bb7b340146102205780634c1b6a2114610249575b600080fd5b34801561015c57600080fd5b5061017760048036038101906101729190612570565b610573565b60405161018693929190612651565b60405180910390f35b34801561019b57600080fd5b506101a461063b565b6040516101b1919061268f565b60405180910390f35b3480156101c657600080fd5b506101e160048036038101906101dc9190612708565b610641565b6040516101ee9190612750565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190612797565b610661565b005b34801561022c57600080fd5b50610247600480360381019061024291906127f3565b61089a565b005b34801561025557600080fd5b5061025e610b5c565b60405161026b919061289a565b60405180910390f35b34801561028057600080fd5b5061029b600480360381019061029691906127f3565b610bea565b005b3480156102a957600080fd5b506102b261149f565b005b3480156102c057600080fd5b506102c96114b3565b6040516102d6919061268f565b60405180910390f35b3480156102eb57600080fd5b5061030660048036038101906103019190612708565b6114b9565b005b34801561031457600080fd5b5061032f600480360381019061032a9190612570565b611553565b005b34801561033d57600080fd5b50610358600480360381019061035391906128e8565b6116a0565b005b34801561036657600080fd5b50610381600480360381019061037c9190612570565b611b19565b6040516103949796959493929190612982565b60405180910390f35b3480156103a957600080fd5b506103b2611d50565b6040516103bf9190612a06565b60405180910390f35b3480156103d457600080fd5b506103ef60048036038101906103ea9190612a5a565b611d79565b005b3480156103fd57600080fd5b50610406611ea8565b6040516104139190612b11565b60405180910390f35b34801561042857600080fd5b50610431611ebb565b60405161043e9190612a06565b60405180910390f35b34801561045357600080fd5b5061045c611ee1565b604051610469919061268f565b60405180910390f35b34801561047e57600080fd5b5061049960048036038101906104949190612570565b611ee7565b6040516104a69190612750565b60405180910390f35b3480156104bb57600080fd5b506104d660048036038101906104d19190612708565b611f1d565b005b6104e0611fb7565b6040516104ed919061268f565b60405180910390f35b34801561050257600080fd5b5061050b612015565b6040516105189190612a06565b60405180910390f35b34801561052d57600080fd5b5061054860048036038101906105439190612708565b61203b565b005b34801561055657600080fd5b50610571600480360381019061056c9190612b2c565b6120be565b005b6008818051602081018201805184825260208301602085012081835280955050505050506000915090508060000180546105ac90612bb7565b80601f01602080910402602001604051908101604052809291908181526020018280546105d890612bb7565b80156106255780601f106105fa57610100808354040283529160200191610625565b820191906000526020600020905b81548152906001019060200180831161060857829003601f168201915b5050505050908060010154908060020154905083565b60035481565b600a6020528060005260406000206000915054906101000a900460ff1681565b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec90612c5a565b60405180910390fd5b826001151560098260405161070a9190612cb6565b908152602001604051809103902060030160009054906101000a900460ff1615151461076b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076290612d19565b60405180910390fd5b8260098560405161077c9190612cb6565b908152602001604051809103902060030160016101000a81548160ff0219169083151502179055506009846040516107b49190612cb6565b908152602001604051809103902060030160019054906101000a900460ff1615610838577f29b0f105119e55a00fc4571b27d168b98ef25b6fac87076252f0a3c2273afbfe8460098660405161080a9190612cb6565b90815260200160405180910390206001013360405161082b93929190612dd2565b60405180910390a1610894565b7ffbf3698bab1795ec6b9e7a4f7fd3440bbf3316e36df3b1b3a5a0d8567b23946e8460098660405161086a9190612cb6565b90815260200160405180910390206001013360405161088b93929190612dd2565b60405180910390a15b50505050565b600160038111156108ae576108ad612a9a565b5b600760009054906101000a900460ff1660038111156108d0576108cf612a9a565b5b14610910576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090790612e63565b60405180910390fd5b60006009846040516109229190612cb6565b9081526020016040518091039020600001805461093e90612bb7565b905014610980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097790612ef5565b60405180910390fd5b60008351116109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90612f61565b60405180910390fd5b6040518060e001604052808481526020018381526020018281526020016000151581526020016000151581526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff16815250600984604051610a269190612cb6565b90815260200160405180910390206000820151816000019081610a499190613118565b506020820151816001019081610a5f9190613118565b506040820151816002019081610a759190613118565b5060608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555060c08201518160030160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f8051bbdc0527c2086000701dd25a4ab12053b4f46b9e4625a96d885e97fd6a1783604051610b4f919061289a565b60405180910390a1505050565b60068054610b6990612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9590612bb7565b8015610be25780601f10610bb757610100808354040283529160200191610be2565b820191906000526020600020905b815481529060010190602001808311610bc557829003601f168201915b505050505081565b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7590612c5a565b60405180910390fd5b60026003811115610c9257610c91612a9a565b5b600760009054906101000a900460ff166003811115610cb457610cb3612a9a565b5b14610cf4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ceb90613236565b60405180910390fd5b8160011515600982604051610d099190612cb6565b908152602001604051809103902060030160009054906101000a900460ff16151514610d6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6190612d19565b60405180910390fd5b8260011515600982604051610d7f9190612cb6565b908152602001604051809103902060030160019054906101000a900460ff16151514610de0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd7906132c8565b60405180910390fd5b610de98661228e565b610e28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1f9061335a565b60405180910390fd5b60011515600b86604051610e3c9190612cb6565b908152602001604051809103902060009054906101000a900460ff16151514610e9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e91906133ec565b60405180910390fd5b6000600985604051610eac9190612cb6565b90815260200160405180910390206040518060e0016040529081600082018054610ed590612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0190612bb7565b8015610f4e5780601f10610f2357610100808354040283529160200191610f4e565b820191906000526020600020905b815481529060010190602001808311610f3157829003601f168201915b50505050508152602001600182018054610f6790612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9390612bb7565b8015610fe05780601f10610fb557610100808354040283529160200191610fe0565b820191906000526020600020905b815481529060010190602001808311610fc357829003601f168201915b50505050508152602001600282018054610ff990612bb7565b80601f016020809104026020016040519081016040528092919081815260200182805461102590612bb7565b80156110725780601f1061104757610100808354040283529160200191611072565b820191906000526020600020905b81548152906001019060200180831161105557829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581526020016003820160019054906101000a900460ff161515151581526020016003820160029054906101000a900460ff161515151581526020016003820160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060018160a0019015159081151581525050600115156008886040516111499190612cb6565b9081526020016040518091039020600301876040516111689190612cb6565b908152602001604051809103902060060160009054906101000a900460ff161515036111c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c090613458565b60405180910390fd5b806008886040516111da9190612cb6565b9081526020016040518091039020600301876040516111f99190612cb6565b9081526020016040518091039020600101600082015181600001908161121f9190613118565b5060208201518160010190816112359190613118565b50604082015181600201908161124b9190613118565b5060608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555060c08201518160030160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fba3efd96458fd0a4e9db1eeb0cae683e1948783f1fb6dba96011d44713bf07e887878760405161132993929190613478565b60405180910390a160008160c001519050600160088960405161134c9190612cb6565b90815260200160405180910390206003018860405161136b9190612cb6565b908152602001604051809103902060060160006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff166108fc60088a6040516113bd9190612cb6565b9081526020016040518091039020600301896040516113dc9190612cb6565b9081526020016040518091039020600501549081150290604051600060405180830381858888f19350505050158015611419573d6000803e3d6000fd5b507fd8d58fbd81efb0ae9830fb270b872ef544d09983c0b93741e53635fd9be67eb0868260088b60405161144d9190612cb6565b90815260200160405180910390206003018a60405161146c9190612cb6565b90815260200160405180910390206005015460405161148d93929190613519565b60405180910390a15050505050505050565b6114a76122cc565b6114b1600061234a565b565b60015481565b6114c16122cc565b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fc0cdacae5a1efb347198155da639c5dbd0a4231a08caed21a124471443a2f562816040516115489190612a06565b60405180910390a150565b8060006009826040516115669190612cb6565b908152602001604051809103902060030160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611608576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ff906135c9565b60405180910390fd5b600160098460405161161a9190612cb6565b908152602001604051809103902060030160006101000a81548160ff0219169083151502179055507f091114303dedf55090a6edbbceeb5424c113dc372bb68367d34eaa4710da9735836009856040516116749190612cb6565b90815260200160405180910390206002016040516116939291906135e9565b60405180910390a1505050565b82816008826040516116b29190612cb6565b908152602001604051809103902060010154816008846040516116d59190612cb6565b9081526020016040518091039020600201546116f1919061364f565b1115611732576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611729906136f5565b60405180910390fd5b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146117c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bd90612c5a565b60405180910390fd5b8460011515600b826040516117db9190612cb6565b908152602001604051809103902060009054906101000a900460ff16151503611839576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183090613761565b60405180910390fd5b6118428761228e565b611881576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611878906137f3565b60405180910390fd5b60006040518060e00160405280604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001600015158152602001600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090506040518060800160405280888152602001828152602001878152602001600015158152506008896040516119399190612cb6565b9081526020016040518091039020600301886040516119589190612cb6565b9081526020016040518091039020600082015181600001908161197b9190613118565b50602082015181600101600082015181600001908161199a9190613118565b5060208201518160010190816119b09190613118565b5060408201518160020190816119c69190613118565b5060608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555060c08201518160030160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506040820151816005015560608201518160060160006101000a81548160ff0219169083151502179055509050506001600b88604051611aaf9190612cb6565b908152602001604051809103902060006101000a81548160ff0219169083151502179055507fae4ff050a5ba41c261af1d7a9fec18cbabfe39148e252ce3df821e1af6a6bf3d888888604051611b0793929190613813565b60405180910390a15050505050505050565b600981805160208101820180518482526020830160208501208183528095505050505050600091509050806000018054611b5290612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7e90612bb7565b8015611bcb5780601f10611ba057610100808354040283529160200191611bcb565b820191906000526020600020905b815481529060010190602001808311611bae57829003601f168201915b505050505090806001018054611be090612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054611c0c90612bb7565b8015611c595780601f10611c2e57610100808354040283529160200191611c59565b820191906000526020600020905b815481529060010190602001808311611c3c57829003601f168201915b505050505090806002018054611c6e90612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9a90612bb7565b8015611ce75780601f10611cbc57610100808354040283529160200191611ce7565b820191906000526020600020905b815481529060010190602001808311611cca57829003601f168201915b5050505050908060030160009054906101000a900460ff16908060030160019054906101000a900460ff16908060030160029054906101000a900460ff16908060030160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905087565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8160011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611e0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e0490612c5a565b60405180910390fd5b60038260ff1611158015611e25575060008260ff1610155b611e64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e5b906138a4565b60405180910390fd5b8160ff166003811115611e7a57611e79612a9a565b5b600760006101000a81548160ff02191690836003811115611e9e57611e9d612a9a565b5b0217905550505050565b600760009054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600b818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900460ff1681565b611f256122cc565b6001600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f0cb38e390fbd334396cf04e29d1374459cd2f2edeb56cf4d68004319aa1575c481604051611fac9190612a06565b60405180910390a150565b60003460016000828254611fcb919061364f565b9250508190555060015490507f4ab203e8f80416d951fe4159a33770c13017d31b9488ef32b87ed19cea5103fd3460015460405161200a9291906138c4565b60405180910390a190565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6120436122cc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036120b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120a99061395f565b60405180910390fd5b6120bb8161234a565b50565b80600154816002546120d0919061364f565b1115612111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210890613a17565b60405180910390fd5b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161219c90612c5a565b60405180910390fd5b6121ae8461228e565b156121ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121e590613a83565b60405180910390fd5b60006008856040516122009190612cb6565b90815260200160405180910390209050600081600201819055508481600001908161222b9190613118565b508381600101819055508360026000828254612247919061364f565b925050819055507fbe036e5140d45a7ded17569ffb791059bb13335e3aead49eb76bdf865ff7e207858560405161227f929190613aa3565b60405180910390a15050505050565b6000806008836040516122a19190612cb6565b90815260200160405180910390206001015411156122c257600190506122c7565b600090505b919050565b6122d461240e565b73ffffffffffffffffffffffffffffffffffffffff166122f2611d50565b73ffffffffffffffffffffffffffffffffffffffff1614612348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161233f90613b1f565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61247d82612434565b810181811067ffffffffffffffff8211171561249c5761249b612445565b5b80604052505050565b60006124af612416565b90506124bb8282612474565b919050565b600067ffffffffffffffff8211156124db576124da612445565b5b6124e482612434565b9050602081019050919050565b82818337600083830152505050565b600061251361250e846124c0565b6124a5565b90508281526020810184848401111561252f5761252e61242f565b5b61253a8482856124f1565b509392505050565b600082601f8301126125575761255661242a565b5b8135612567848260208601612500565b91505092915050565b60006020828403121561258657612585612420565b5b600082013567ffffffffffffffff8111156125a4576125a3612425565b5b6125b084828501612542565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156125f35780820151818401526020810190506125d8565b60008484015250505050565b600061260a826125b9565b61261481856125c4565b93506126248185602086016125d5565b61262d81612434565b840191505092915050565b6000819050919050565b61264b81612638565b82525050565b6000606082019050818103600083015261266b81866125ff565b905061267a6020830185612642565b6126876040830184612642565b949350505050565b60006020820190506126a46000830184612642565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006126d5826126aa565b9050919050565b6126e5816126ca565b81146126f057600080fd5b50565b600081359050612702816126dc565b92915050565b60006020828403121561271e5761271d612420565b5b600061272c848285016126f3565b91505092915050565b60008115159050919050565b61274a81612735565b82525050565b60006020820190506127656000830184612741565b92915050565b61277481612735565b811461277f57600080fd5b50565b6000813590506127918161276b565b92915050565b600080604083850312156127ae576127ad612420565b5b600083013567ffffffffffffffff8111156127cc576127cb612425565b5b6127d885828601612542565b92505060206127e985828601612782565b9150509250929050565b60008060006060848603121561280c5761280b612420565b5b600084013567ffffffffffffffff81111561282a57612829612425565b5b61283686828701612542565b935050602084013567ffffffffffffffff81111561285757612856612425565b5b61286386828701612542565b925050604084013567ffffffffffffffff81111561288457612883612425565b5b61289086828701612542565b9150509250925092565b600060208201905081810360008301526128b481846125ff565b905092915050565b6128c581612638565b81146128d057600080fd5b50565b6000813590506128e2816128bc565b92915050565b60008060006060848603121561290157612900612420565b5b600084013567ffffffffffffffff81111561291f5761291e612425565b5b61292b86828701612542565b935050602084013567ffffffffffffffff81111561294c5761294b612425565b5b61295886828701612542565b9250506040612969868287016128d3565b9150509250925092565b61297c816126ca565b82525050565b600060e082019050818103600083015261299c818a6125ff565b905081810360208301526129b081896125ff565b905081810360408301526129c481886125ff565b90506129d36060830187612741565b6129e06080830186612741565b6129ed60a0830185612741565b6129fa60c0830184612973565b98975050505050505050565b6000602082019050612a1b6000830184612973565b92915050565b600060ff82169050919050565b612a3781612a21565b8114612a4257600080fd5b50565b600081359050612a5481612a2e565b92915050565b60008060408385031215612a7157612a70612420565b5b6000612a7f858286016126f3565b9250506020612a9085828601612a45565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110612ada57612ad9612a9a565b5b50565b6000819050612aeb82612ac9565b919050565b6000612afb82612add565b9050919050565b612b0b81612af0565b82525050565b6000602082019050612b266000830184612b02565b92915050565b60008060408385031215612b4357612b42612420565b5b600083013567ffffffffffffffff811115612b6157612b60612425565b5b612b6d85828601612542565b9250506020612b7e858286016128d3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612bcf57607f821691505b602082108103612be257612be1612b88565b5b50919050565b7f4f6e6c7920636f6d6d6974746565206d656d626572732063616e20616363657360008201527f732074686973206d6574686f6421000000000000000000000000000000000000602082015250565b6000612c44602e836125c4565b9150612c4f82612be8565b604082019050919050565b60006020820190508181036000830152612c7381612c37565b9050919050565b600081905092915050565b6000612c90826125b9565b612c9a8185612c7a565b9350612caa8185602086016125d5565b80840191505092915050565b6000612cc28284612c85565b915081905092915050565b7f50726f6a65637420686173206e6f74206265656e207375626d69747465642100600082015250565b6000612d03601f836125c4565b9150612d0e82612ccd565b602082019050919050565b60006020820190508181036000830152612d3281612cf6565b9050919050565b60008190508160005260206000209050919050565b60008154612d5b81612bb7565b612d6581866125c4565b94506001821660008114612d805760018114612d9657612dc9565b60ff198316865281151560200286019350612dc9565b612d9f85612d39565b60005b83811015612dc157815481890152600182019150602081019050612da2565b808801955050505b50505092915050565b60006060820190508181036000830152612dec81866125ff565b90508181036020830152612e008185612d4e565b9050612e0f6040830184612973565b949350505050565b7f546865206861636b6174686f6e206973206e6f74206f70656e21000000000000600082015250565b6000612e4d601a836125c4565b9150612e5882612e17565b602082019050919050565b60006020820190508181036000830152612e7c81612e40565b9050919050565b7f5465616d206e616d6520616c72656164792074616b656e2c20706c656173652060008201527f73656c656374206120646966666572656e74206e616d65000000000000000000602082015250565b6000612edf6037836125c4565b9150612eea82612e83565b604082019050919050565b60006020820190508181036000830152612f0e81612ed2565b9050919050565b7f506c656173652070726f766964652061207465616d206e616d65210000000000600082015250565b6000612f4b601b836125c4565b9150612f5682612f15565b602082019050919050565b60006020820190508181036000830152612f7a81612f3e565b9050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612fce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612f91565b612fd88683612f91565b95508019841693508086168417925050509392505050565b6000819050919050565b600061301561301061300b84612638565b612ff0565b612638565b9050919050565b6000819050919050565b61302f83612ffa565b61304361303b8261301c565b848454612f9e565b825550505050565b600090565b61305861304b565b613063818484613026565b505050565b5b818110156130875761307c600082613050565b600181019050613069565b5050565b601f8211156130cc5761309d81612d39565b6130a684612f81565b810160208510156130b5578190505b6130c96130c185612f81565b830182613068565b50505b505050565b600082821c905092915050565b60006130ef600019846008026130d1565b1980831691505092915050565b600061310883836130de565b9150826002028217905092915050565b613121826125b9565b67ffffffffffffffff81111561313a57613139612445565b5b6131448254612bb7565b61314f82828561308b565b600060209050601f8311600181146131825760008415613170578287015190505b61317a85826130fc565b8655506131e2565b601f19841661319086612d39565b60005b828110156131b857848901518255600182019150602085019450602081019050613193565b868310156131d557848901516131d1601f8916826130de565b8355505b6001600288020188555050505b505050505050565b7f546865206861636b6174686f6e2073686f756c6420626520636c6f7365642100600082015250565b6000613220601f836125c4565b915061322b826131ea565b602082019050919050565b6000602082019050818103600083015261324f81613213565b9050919050565b7f50726f6a656374207375626d697373696f6e20686173206e6f74206265656e2060008201527f76616c696461746564206f7220697320696e76616c6964210000000000000000602082015250565b60006132b26038836125c4565b91506132bd82613256565b604082019050919050565b600060208201905081810360008301526132e1816132a5565b9050919050565b7f54686520747261636b206d656e74696f6e656420646f6573206e6f742065786960008201527f7374210000000000000000000000000000000000000000000000000000000000602082015250565b60006133446023836125c4565b915061334f826132e8565b604082019050919050565b6000602082019050818103600083015261337381613337565b9050919050565b7f546865207072697a65206d656e74696f6e656420646f6573206e6f742065786960008201527f7374210000000000000000000000000000000000000000000000000000000000602082015250565b60006133d66023836125c4565b91506133e18261337a565b604082019050919050565b60006020820190508181036000830152613405816133c9565b9050919050565b7f5072697a652068617320616c7265616479206265656e20706169640000000000600082015250565b6000613442601b836125c4565b915061344d8261340c565b602082019050919050565b6000602082019050818103600083015261347181613435565b9050919050565b6000606082019050818103600083015261349281866125ff565b905081810360208301526134a681856125ff565b905081810360408301526134ba81846125ff565b9050949350505050565b60006134df6134da6134d5846126aa565b612ff0565b6126aa565b9050919050565b60006134f1826134c4565b9050919050565b6000613503826134e6565b9050919050565b613513816134f8565b82525050565b6000606082019050818103600083015261353381866125ff565b9050613542602083018561350a565b61354f6040830184612642565b949350505050565b7f4f6e6c79206d61696e207061727469636970616e742f7465616d206c6561642060008201527f63616e2063616c6c2074686973206d6574686f64000000000000000000000000602082015250565b60006135b36034836125c4565b91506135be82613557565b604082019050919050565b600060208201905081810360008301526135e2816135a6565b9050919050565b6000604082019050818103600083015261360381856125ff565b905081810360208301526136178184612d4e565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061365a82612638565b915061366583612638565b925082820190508082111561367d5761367c613620565b5b92915050565b7f547261636b207072697a6520746f74616c2063616e6e6f74206578636565642060008201527f747261636b207072697a6520706f6f6c00000000000000000000000000000000602082015250565b60006136df6030836125c4565b91506136ea82613683565b604082019050919050565b6000602082019050818103600083015261370e816136d2565b9050919050565b7f5072697a65206e616d652073686f756c6420626520756e697175652100000000600082015250565b600061374b601c836125c4565b915061375682613715565b602082019050919050565b6000602082019050818103600083015261377a8161373e565b9050919050565b7f54686520747261636b206d656e74696f6e656420646f6573206e6f742065786960008201527f7374000000000000000000000000000000000000000000000000000000000000602082015250565b60006137dd6022836125c4565b91506137e882613781565b604082019050919050565b6000602082019050818103600083015261380c816137d0565b9050919050565b6000606082019050818103600083015261382d81866125ff565b9050818103602083015261384181856125ff565b90506138506040830184612642565b949350505050565b7f4e6f7420612076616c6964206861636b6174686f6e2073746174652100000000600082015250565b600061388e601c836125c4565b915061389982613858565b602082019050919050565b600060208201905081810360008301526138bd81613881565b9050919050565b60006040820190506138d96000830185612642565b6138e66020830184612642565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006139496026836125c4565b9150613954826138ed565b604082019050919050565b600060208201905081810360008301526139788161393c565b9050919050565b7f4164646974696f6e206f66207468697320747261636b2065786365656473207460008201527f686520746f74616c20617661696c61626c652066756e647320706f6f6c2c207060208201527f6c656173652066756e6420636f6e747261637420666972737421000000000000604082015250565b6000613a01605a836125c4565b9150613a0c8261397f565b606082019050919050565b60006020820190508181036000830152613a30816139f4565b9050919050565b7f5468697320747261636b20616c72656164792065786973747300000000000000600082015250565b6000613a6d6019836125c4565b9150613a7882613a37565b602082019050919050565b60006020820190508181036000830152613a9c81613a60565b9050919050565b60006040820190508181036000830152613abd81856125ff565b9050613acc6020830184612642565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613b096020836125c4565b9150613b1482613ad3565b602082019050919050565b60006020820190508181036000830152613b3881613afc565b905091905056fea2646970667358221220953fe9214c0947cd148e9c73bdb3a7294fa5fd2247d6621cd7775386de6833a764736f6c63430008110033",
    deployedBytecode:
        "0x60806040526004361061014b5760003560e01c806389170d03116100b6578063cf26fe661161006f578063cf26fe6614610472578063e7f1f953146104af578063e94ab878146104d8578063eb652fdc146104f6578063f2fde38b14610521578063ff4c64621461054a5761014b565b806389170d031461035a5780638da5cb5b1461039d5780638ed3a54e146103c8578063a1cb31b7146103f1578063af2965d01461041c578063bbb6fa7f146104475761014b565b80636367d993116101085780636367d99314610274578063715018a61461029d578063715c65b5146102b45780637fad0d48146102df578063832cc51f1461030857806387a86070146103315761014b565b8063039e0adc1461015057806311996ce81461018f578063140c979a146101ba5780631434e899146101f75780632bb7b340146102205780634c1b6a2114610249575b600080fd5b34801561015c57600080fd5b5061017760048036038101906101729190612570565b610573565b60405161018693929190612651565b60405180910390f35b34801561019b57600080fd5b506101a461063b565b6040516101b1919061268f565b60405180910390f35b3480156101c657600080fd5b506101e160048036038101906101dc9190612708565b610641565b6040516101ee9190612750565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190612797565b610661565b005b34801561022c57600080fd5b50610247600480360381019061024291906127f3565b61089a565b005b34801561025557600080fd5b5061025e610b5c565b60405161026b919061289a565b60405180910390f35b34801561028057600080fd5b5061029b600480360381019061029691906127f3565b610bea565b005b3480156102a957600080fd5b506102b261149f565b005b3480156102c057600080fd5b506102c96114b3565b6040516102d6919061268f565b60405180910390f35b3480156102eb57600080fd5b5061030660048036038101906103019190612708565b6114b9565b005b34801561031457600080fd5b5061032f600480360381019061032a9190612570565b611553565b005b34801561033d57600080fd5b50610358600480360381019061035391906128e8565b6116a0565b005b34801561036657600080fd5b50610381600480360381019061037c9190612570565b611b19565b6040516103949796959493929190612982565b60405180910390f35b3480156103a957600080fd5b506103b2611d50565b6040516103bf9190612a06565b60405180910390f35b3480156103d457600080fd5b506103ef60048036038101906103ea9190612a5a565b611d79565b005b3480156103fd57600080fd5b50610406611ea8565b6040516104139190612b11565b60405180910390f35b34801561042857600080fd5b50610431611ebb565b60405161043e9190612a06565b60405180910390f35b34801561045357600080fd5b5061045c611ee1565b604051610469919061268f565b60405180910390f35b34801561047e57600080fd5b5061049960048036038101906104949190612570565b611ee7565b6040516104a69190612750565b60405180910390f35b3480156104bb57600080fd5b506104d660048036038101906104d19190612708565b611f1d565b005b6104e0611fb7565b6040516104ed919061268f565b60405180910390f35b34801561050257600080fd5b5061050b612015565b6040516105189190612a06565b60405180910390f35b34801561052d57600080fd5b5061054860048036038101906105439190612708565b61203b565b005b34801561055657600080fd5b50610571600480360381019061056c9190612b2c565b6120be565b005b6008818051602081018201805184825260208301602085012081835280955050505050506000915090508060000180546105ac90612bb7565b80601f01602080910402602001604051908101604052809291908181526020018280546105d890612bb7565b80156106255780601f106105fa57610100808354040283529160200191610625565b820191906000526020600020905b81548152906001019060200180831161060857829003601f168201915b5050505050908060010154908060020154905083565b60035481565b600a6020528060005260406000206000915054906101000a900460ff1681565b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec90612c5a565b60405180910390fd5b826001151560098260405161070a9190612cb6565b908152602001604051809103902060030160009054906101000a900460ff1615151461076b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076290612d19565b60405180910390fd5b8260098560405161077c9190612cb6565b908152602001604051809103902060030160016101000a81548160ff0219169083151502179055506009846040516107b49190612cb6565b908152602001604051809103902060030160019054906101000a900460ff1615610838577f29b0f105119e55a00fc4571b27d168b98ef25b6fac87076252f0a3c2273afbfe8460098660405161080a9190612cb6565b90815260200160405180910390206001013360405161082b93929190612dd2565b60405180910390a1610894565b7ffbf3698bab1795ec6b9e7a4f7fd3440bbf3316e36df3b1b3a5a0d8567b23946e8460098660405161086a9190612cb6565b90815260200160405180910390206001013360405161088b93929190612dd2565b60405180910390a15b50505050565b600160038111156108ae576108ad612a9a565b5b600760009054906101000a900460ff1660038111156108d0576108cf612a9a565b5b14610910576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090790612e63565b60405180910390fd5b60006009846040516109229190612cb6565b9081526020016040518091039020600001805461093e90612bb7565b905014610980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097790612ef5565b60405180910390fd5b60008351116109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90612f61565b60405180910390fd5b6040518060e001604052808481526020018381526020018281526020016000151581526020016000151581526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff16815250600984604051610a269190612cb6565b90815260200160405180910390206000820151816000019081610a499190613118565b506020820151816001019081610a5f9190613118565b506040820151816002019081610a759190613118565b5060608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555060c08201518160030160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f8051bbdc0527c2086000701dd25a4ab12053b4f46b9e4625a96d885e97fd6a1783604051610b4f919061289a565b60405180910390a1505050565b60068054610b6990612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9590612bb7565b8015610be25780601f10610bb757610100808354040283529160200191610be2565b820191906000526020600020905b815481529060010190602001808311610bc557829003601f168201915b505050505081565b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7590612c5a565b60405180910390fd5b60026003811115610c9257610c91612a9a565b5b600760009054906101000a900460ff166003811115610cb457610cb3612a9a565b5b14610cf4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ceb90613236565b60405180910390fd5b8160011515600982604051610d099190612cb6565b908152602001604051809103902060030160009054906101000a900460ff16151514610d6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6190612d19565b60405180910390fd5b8260011515600982604051610d7f9190612cb6565b908152602001604051809103902060030160019054906101000a900460ff16151514610de0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd7906132c8565b60405180910390fd5b610de98661228e565b610e28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1f9061335a565b60405180910390fd5b60011515600b86604051610e3c9190612cb6565b908152602001604051809103902060009054906101000a900460ff16151514610e9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e91906133ec565b60405180910390fd5b6000600985604051610eac9190612cb6565b90815260200160405180910390206040518060e0016040529081600082018054610ed590612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0190612bb7565b8015610f4e5780601f10610f2357610100808354040283529160200191610f4e565b820191906000526020600020905b815481529060010190602001808311610f3157829003601f168201915b50505050508152602001600182018054610f6790612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9390612bb7565b8015610fe05780601f10610fb557610100808354040283529160200191610fe0565b820191906000526020600020905b815481529060010190602001808311610fc357829003601f168201915b50505050508152602001600282018054610ff990612bb7565b80601f016020809104026020016040519081016040528092919081815260200182805461102590612bb7565b80156110725780601f1061104757610100808354040283529160200191611072565b820191906000526020600020905b81548152906001019060200180831161105557829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581526020016003820160019054906101000a900460ff161515151581526020016003820160029054906101000a900460ff161515151581526020016003820160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060018160a0019015159081151581525050600115156008886040516111499190612cb6565b9081526020016040518091039020600301876040516111689190612cb6565b908152602001604051809103902060060160009054906101000a900460ff161515036111c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c090613458565b60405180910390fd5b806008886040516111da9190612cb6565b9081526020016040518091039020600301876040516111f99190612cb6565b9081526020016040518091039020600101600082015181600001908161121f9190613118565b5060208201518160010190816112359190613118565b50604082015181600201908161124b9190613118565b5060608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555060c08201518160030160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fba3efd96458fd0a4e9db1eeb0cae683e1948783f1fb6dba96011d44713bf07e887878760405161132993929190613478565b60405180910390a160008160c001519050600160088960405161134c9190612cb6565b90815260200160405180910390206003018860405161136b9190612cb6565b908152602001604051809103902060060160006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff166108fc60088a6040516113bd9190612cb6565b9081526020016040518091039020600301896040516113dc9190612cb6565b9081526020016040518091039020600501549081150290604051600060405180830381858888f19350505050158015611419573d6000803e3d6000fd5b507fd8d58fbd81efb0ae9830fb270b872ef544d09983c0b93741e53635fd9be67eb0868260088b60405161144d9190612cb6565b90815260200160405180910390206003018a60405161146c9190612cb6565b90815260200160405180910390206005015460405161148d93929190613519565b60405180910390a15050505050505050565b6114a76122cc565b6114b1600061234a565b565b60015481565b6114c16122cc565b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fc0cdacae5a1efb347198155da639c5dbd0a4231a08caed21a124471443a2f562816040516115489190612a06565b60405180910390a150565b8060006009826040516115669190612cb6565b908152602001604051809103902060030160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611608576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ff906135c9565b60405180910390fd5b600160098460405161161a9190612cb6565b908152602001604051809103902060030160006101000a81548160ff0219169083151502179055507f091114303dedf55090a6edbbceeb5424c113dc372bb68367d34eaa4710da9735836009856040516116749190612cb6565b90815260200160405180910390206002016040516116939291906135e9565b60405180910390a1505050565b82816008826040516116b29190612cb6565b908152602001604051809103902060010154816008846040516116d59190612cb6565b9081526020016040518091039020600201546116f1919061364f565b1115611732576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611729906136f5565b60405180910390fd5b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146117c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bd90612c5a565b60405180910390fd5b8460011515600b826040516117db9190612cb6565b908152602001604051809103902060009054906101000a900460ff16151503611839576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183090613761565b60405180910390fd5b6118428761228e565b611881576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611878906137f3565b60405180910390fd5b60006040518060e00160405280604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001600015158152602001600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090506040518060800160405280888152602001828152602001878152602001600015158152506008896040516119399190612cb6565b9081526020016040518091039020600301886040516119589190612cb6565b9081526020016040518091039020600082015181600001908161197b9190613118565b50602082015181600101600082015181600001908161199a9190613118565b5060208201518160010190816119b09190613118565b5060408201518160020190816119c69190613118565b5060608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555060c08201518160030160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506040820151816005015560608201518160060160006101000a81548160ff0219169083151502179055509050506001600b88604051611aaf9190612cb6565b908152602001604051809103902060006101000a81548160ff0219169083151502179055507fae4ff050a5ba41c261af1d7a9fec18cbabfe39148e252ce3df821e1af6a6bf3d888888604051611b0793929190613813565b60405180910390a15050505050505050565b600981805160208101820180518482526020830160208501208183528095505050505050600091509050806000018054611b5290612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7e90612bb7565b8015611bcb5780601f10611ba057610100808354040283529160200191611bcb565b820191906000526020600020905b815481529060010190602001808311611bae57829003601f168201915b505050505090806001018054611be090612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054611c0c90612bb7565b8015611c595780601f10611c2e57610100808354040283529160200191611c59565b820191906000526020600020905b815481529060010190602001808311611c3c57829003601f168201915b505050505090806002018054611c6e90612bb7565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9a90612bb7565b8015611ce75780601f10611cbc57610100808354040283529160200191611ce7565b820191906000526020600020905b815481529060010190602001808311611cca57829003601f168201915b5050505050908060030160009054906101000a900460ff16908060030160019054906101000a900460ff16908060030160029054906101000a900460ff16908060030160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905087565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8160011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611e0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e0490612c5a565b60405180910390fd5b60038260ff1611158015611e25575060008260ff1610155b611e64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e5b906138a4565b60405180910390fd5b8160ff166003811115611e7a57611e79612a9a565b5b600760006101000a81548160ff02191690836003811115611e9e57611e9d612a9a565b5b0217905550505050565b600760009054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600b818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900460ff1681565b611f256122cc565b6001600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f0cb38e390fbd334396cf04e29d1374459cd2f2edeb56cf4d68004319aa1575c481604051611fac9190612a06565b60405180910390a150565b60003460016000828254611fcb919061364f565b9250508190555060015490507f4ab203e8f80416d951fe4159a33770c13017d31b9488ef32b87ed19cea5103fd3460015460405161200a9291906138c4565b60405180910390a190565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6120436122cc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036120b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120a99061395f565b60405180910390fd5b6120bb8161234a565b50565b80600154816002546120d0919061364f565b1115612111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210890613a17565b60405180910390fd5b3360011515600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161219c90612c5a565b60405180910390fd5b6121ae8461228e565b156121ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121e590613a83565b60405180910390fd5b60006008856040516122009190612cb6565b90815260200160405180910390209050600081600201819055508481600001908161222b9190613118565b508381600101819055508360026000828254612247919061364f565b925050819055507fbe036e5140d45a7ded17569ffb791059bb13335e3aead49eb76bdf865ff7e207858560405161227f929190613aa3565b60405180910390a15050505050565b6000806008836040516122a19190612cb6565b90815260200160405180910390206001015411156122c257600190506122c7565b600090505b919050565b6122d461240e565b73ffffffffffffffffffffffffffffffffffffffff166122f2611d50565b73ffffffffffffffffffffffffffffffffffffffff1614612348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161233f90613b1f565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61247d82612434565b810181811067ffffffffffffffff8211171561249c5761249b612445565b5b80604052505050565b60006124af612416565b90506124bb8282612474565b919050565b600067ffffffffffffffff8211156124db576124da612445565b5b6124e482612434565b9050602081019050919050565b82818337600083830152505050565b600061251361250e846124c0565b6124a5565b90508281526020810184848401111561252f5761252e61242f565b5b61253a8482856124f1565b509392505050565b600082601f8301126125575761255661242a565b5b8135612567848260208601612500565b91505092915050565b60006020828403121561258657612585612420565b5b600082013567ffffffffffffffff8111156125a4576125a3612425565b5b6125b084828501612542565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156125f35780820151818401526020810190506125d8565b60008484015250505050565b600061260a826125b9565b61261481856125c4565b93506126248185602086016125d5565b61262d81612434565b840191505092915050565b6000819050919050565b61264b81612638565b82525050565b6000606082019050818103600083015261266b81866125ff565b905061267a6020830185612642565b6126876040830184612642565b949350505050565b60006020820190506126a46000830184612642565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006126d5826126aa565b9050919050565b6126e5816126ca565b81146126f057600080fd5b50565b600081359050612702816126dc565b92915050565b60006020828403121561271e5761271d612420565b5b600061272c848285016126f3565b91505092915050565b60008115159050919050565b61274a81612735565b82525050565b60006020820190506127656000830184612741565b92915050565b61277481612735565b811461277f57600080fd5b50565b6000813590506127918161276b565b92915050565b600080604083850312156127ae576127ad612420565b5b600083013567ffffffffffffffff8111156127cc576127cb612425565b5b6127d885828601612542565b92505060206127e985828601612782565b9150509250929050565b60008060006060848603121561280c5761280b612420565b5b600084013567ffffffffffffffff81111561282a57612829612425565b5b61283686828701612542565b935050602084013567ffffffffffffffff81111561285757612856612425565b5b61286386828701612542565b925050604084013567ffffffffffffffff81111561288457612883612425565b5b61289086828701612542565b9150509250925092565b600060208201905081810360008301526128b481846125ff565b905092915050565b6128c581612638565b81146128d057600080fd5b50565b6000813590506128e2816128bc565b92915050565b60008060006060848603121561290157612900612420565b5b600084013567ffffffffffffffff81111561291f5761291e612425565b5b61292b86828701612542565b935050602084013567ffffffffffffffff81111561294c5761294b612425565b5b61295886828701612542565b9250506040612969868287016128d3565b9150509250925092565b61297c816126ca565b82525050565b600060e082019050818103600083015261299c818a6125ff565b905081810360208301526129b081896125ff565b905081810360408301526129c481886125ff565b90506129d36060830187612741565b6129e06080830186612741565b6129ed60a0830185612741565b6129fa60c0830184612973565b98975050505050505050565b6000602082019050612a1b6000830184612973565b92915050565b600060ff82169050919050565b612a3781612a21565b8114612a4257600080fd5b50565b600081359050612a5481612a2e565b92915050565b60008060408385031215612a7157612a70612420565b5b6000612a7f858286016126f3565b9250506020612a9085828601612a45565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110612ada57612ad9612a9a565b5b50565b6000819050612aeb82612ac9565b919050565b6000612afb82612add565b9050919050565b612b0b81612af0565b82525050565b6000602082019050612b266000830184612b02565b92915050565b60008060408385031215612b4357612b42612420565b5b600083013567ffffffffffffffff811115612b6157612b60612425565b5b612b6d85828601612542565b9250506020612b7e858286016128d3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612bcf57607f821691505b602082108103612be257612be1612b88565b5b50919050565b7f4f6e6c7920636f6d6d6974746565206d656d626572732063616e20616363657360008201527f732074686973206d6574686f6421000000000000000000000000000000000000602082015250565b6000612c44602e836125c4565b9150612c4f82612be8565b604082019050919050565b60006020820190508181036000830152612c7381612c37565b9050919050565b600081905092915050565b6000612c90826125b9565b612c9a8185612c7a565b9350612caa8185602086016125d5565b80840191505092915050565b6000612cc28284612c85565b915081905092915050565b7f50726f6a65637420686173206e6f74206265656e207375626d69747465642100600082015250565b6000612d03601f836125c4565b9150612d0e82612ccd565b602082019050919050565b60006020820190508181036000830152612d3281612cf6565b9050919050565b60008190508160005260206000209050919050565b60008154612d5b81612bb7565b612d6581866125c4565b94506001821660008114612d805760018114612d9657612dc9565b60ff198316865281151560200286019350612dc9565b612d9f85612d39565b60005b83811015612dc157815481890152600182019150602081019050612da2565b808801955050505b50505092915050565b60006060820190508181036000830152612dec81866125ff565b90508181036020830152612e008185612d4e565b9050612e0f6040830184612973565b949350505050565b7f546865206861636b6174686f6e206973206e6f74206f70656e21000000000000600082015250565b6000612e4d601a836125c4565b9150612e5882612e17565b602082019050919050565b60006020820190508181036000830152612e7c81612e40565b9050919050565b7f5465616d206e616d6520616c72656164792074616b656e2c20706c656173652060008201527f73656c656374206120646966666572656e74206e616d65000000000000000000602082015250565b6000612edf6037836125c4565b9150612eea82612e83565b604082019050919050565b60006020820190508181036000830152612f0e81612ed2565b9050919050565b7f506c656173652070726f766964652061207465616d206e616d65210000000000600082015250565b6000612f4b601b836125c4565b9150612f5682612f15565b602082019050919050565b60006020820190508181036000830152612f7a81612f3e565b9050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612fce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612f91565b612fd88683612f91565b95508019841693508086168417925050509392505050565b6000819050919050565b600061301561301061300b84612638565b612ff0565b612638565b9050919050565b6000819050919050565b61302f83612ffa565b61304361303b8261301c565b848454612f9e565b825550505050565b600090565b61305861304b565b613063818484613026565b505050565b5b818110156130875761307c600082613050565b600181019050613069565b5050565b601f8211156130cc5761309d81612d39565b6130a684612f81565b810160208510156130b5578190505b6130c96130c185612f81565b830182613068565b50505b505050565b600082821c905092915050565b60006130ef600019846008026130d1565b1980831691505092915050565b600061310883836130de565b9150826002028217905092915050565b613121826125b9565b67ffffffffffffffff81111561313a57613139612445565b5b6131448254612bb7565b61314f82828561308b565b600060209050601f8311600181146131825760008415613170578287015190505b61317a85826130fc565b8655506131e2565b601f19841661319086612d39565b60005b828110156131b857848901518255600182019150602085019450602081019050613193565b868310156131d557848901516131d1601f8916826130de565b8355505b6001600288020188555050505b505050505050565b7f546865206861636b6174686f6e2073686f756c6420626520636c6f7365642100600082015250565b6000613220601f836125c4565b915061322b826131ea565b602082019050919050565b6000602082019050818103600083015261324f81613213565b9050919050565b7f50726f6a656374207375626d697373696f6e20686173206e6f74206265656e2060008201527f76616c696461746564206f7220697320696e76616c6964210000000000000000602082015250565b60006132b26038836125c4565b91506132bd82613256565b604082019050919050565b600060208201905081810360008301526132e1816132a5565b9050919050565b7f54686520747261636b206d656e74696f6e656420646f6573206e6f742065786960008201527f7374210000000000000000000000000000000000000000000000000000000000602082015250565b60006133446023836125c4565b915061334f826132e8565b604082019050919050565b6000602082019050818103600083015261337381613337565b9050919050565b7f546865207072697a65206d656e74696f6e656420646f6573206e6f742065786960008201527f7374210000000000000000000000000000000000000000000000000000000000602082015250565b60006133d66023836125c4565b91506133e18261337a565b604082019050919050565b60006020820190508181036000830152613405816133c9565b9050919050565b7f5072697a652068617320616c7265616479206265656e20706169640000000000600082015250565b6000613442601b836125c4565b915061344d8261340c565b602082019050919050565b6000602082019050818103600083015261347181613435565b9050919050565b6000606082019050818103600083015261349281866125ff565b905081810360208301526134a681856125ff565b905081810360408301526134ba81846125ff565b9050949350505050565b60006134df6134da6134d5846126aa565b612ff0565b6126aa565b9050919050565b60006134f1826134c4565b9050919050565b6000613503826134e6565b9050919050565b613513816134f8565b82525050565b6000606082019050818103600083015261353381866125ff565b9050613542602083018561350a565b61354f6040830184612642565b949350505050565b7f4f6e6c79206d61696e207061727469636970616e742f7465616d206c6561642060008201527f63616e2063616c6c2074686973206d6574686f64000000000000000000000000602082015250565b60006135b36034836125c4565b91506135be82613557565b604082019050919050565b600060208201905081810360008301526135e2816135a6565b9050919050565b6000604082019050818103600083015261360381856125ff565b905081810360208301526136178184612d4e565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061365a82612638565b915061366583612638565b925082820190508082111561367d5761367c613620565b5b92915050565b7f547261636b207072697a6520746f74616c2063616e6e6f74206578636565642060008201527f747261636b207072697a6520706f6f6c00000000000000000000000000000000602082015250565b60006136df6030836125c4565b91506136ea82613683565b604082019050919050565b6000602082019050818103600083015261370e816136d2565b9050919050565b7f5072697a65206e616d652073686f756c6420626520756e697175652100000000600082015250565b600061374b601c836125c4565b915061375682613715565b602082019050919050565b6000602082019050818103600083015261377a8161373e565b9050919050565b7f54686520747261636b206d656e74696f6e656420646f6573206e6f742065786960008201527f7374000000000000000000000000000000000000000000000000000000000000602082015250565b60006137dd6022836125c4565b91506137e882613781565b604082019050919050565b6000602082019050818103600083015261380c816137d0565b9050919050565b6000606082019050818103600083015261382d81866125ff565b9050818103602083015261384181856125ff565b90506138506040830184612642565b949350505050565b7f4e6f7420612076616c6964206861636b6174686f6e2073746174652100000000600082015250565b600061388e601c836125c4565b915061389982613858565b602082019050919050565b600060208201905081810360008301526138bd81613881565b9050919050565b60006040820190506138d96000830185612642565b6138e66020830184612642565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006139496026836125c4565b9150613954826138ed565b604082019050919050565b600060208201905081810360008301526139788161393c565b9050919050565b7f4164646974696f6e206f66207468697320747261636b2065786365656473207460008201527f686520746f74616c20617661696c61626c652066756e647320706f6f6c2c207060208201527f6c656173652066756e6420636f6e747261637420666972737421000000000000604082015250565b6000613a01605a836125c4565b9150613a0c8261397f565b606082019050919050565b60006020820190508181036000830152613a30816139f4565b9050919050565b7f5468697320747261636b20616c72656164792065786973747300000000000000600082015250565b6000613a6d6019836125c4565b9150613a7882613a37565b602082019050919050565b60006020820190508181036000830152613a9c81613a60565b9050919050565b60006040820190508181036000830152613abd81856125ff565b9050613acc6020830184612642565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613b096020836125c4565b9150613b1482613ad3565b602082019050919050565b60006020820190508181036000830152613b3881613afc565b905091905056fea2646970667358221220953fe9214c0947cd148e9c73bdb3a7294fa5fd2247d6621cd7775386de6833a764736f6c63430008110033",
    linkReferences: {},
    deployedLinkReferences: {},
}
