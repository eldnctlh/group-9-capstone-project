import { ethers, BigNumber, Contract, Signer } from "ethers"
import { createContext, useContext, useMemo, useState } from "react"
import abi from "constants/abi/hackatonManagerAbi"

export type Track = {
    trackName: string
    trackPrize: string
}

export type Participant = {
    teamName: string
    projectName: string
    projectLink: string
}

type HackatonManager = {
    loading: boolean
    initHackatonManager: (address: string) => void
    createSignedContract: (signer: Signer) => void
    resetSignedContract: () => void
    createTracks: (tracks: Track) => void
    registerParticipant: (participant: Participant) => void
    addCID: (CID: string) => void
    fundHackaton: (amount: string) => void
}

type HackatonState = {
    name: string
    CID: string
    funds: null | BigNumber
    funded: boolean
}

const defaultHackatonState: HackatonState = {
    name: "",
    CID: "",
    funds: null,
    funded: false,
}

export const HackatonManagerContext = createContext<HackatonManager>({})

export const useHackatonManagerContext = () => {
    const [signedContract, setSignedContract] = useState<Contract>()
    const [loading, setLoading] = useState<boolean>(true)
    const [contractAddress, setContractAddress] = useState<string>("")
    const [hackatonState, setHackatonState] = useState<HackatonState>(defaultHackatonState)

    const createSignedContract = (signer: Signer) => {
        const contract_ = new ethers.Contract(contractAddress, abi.abi, signer)
        setSignedContract(contract_)
    }

    const resetSignedContract = () => {
        setSignedContract(undefined)
    }

    const initHackatonManager = async (contractAddress: string) => {
        setLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract_ = new ethers.Contract(contractAddress, abi.abi, provider)
        const funds = await contract_._hackathonFundBalance()
        const funded = funds.gt(0)
        const [name] = await Promise.all([contract_._hackathonName()])
        setHackatonState({
            name,
            CID: "",
            funds,
            funded,
        })
        setContractAddress(contractAddress)
        setLoading(false)
    }

    const createTracks = async (track: Track) => {
        if (signedContract) {
            await signedContract.createTrack(track.trackName, track.trackPrize)
        }
    }

    const registerParticipant = async (participant: Participant) => {
        if (signedContract) {
            await signedContract.registerParticipant(
                participant.teamName,
                participant.projectName,
                participant.projectLink
            )
        }
    }

    const fundHackaton = async (amount: string) => {
        if (signedContract) {
            const rc = await signedContract.fundHackathon({
                value: ethers.utils.parseEther(amount),
            })
            setHackatonState({
                ...hackatonState,
                funded: true,
            })
            const res = await rc.wait()
            console.log(res)
        }
    }

    const addCID = async (CID: string) => {
        if (signedContract) {
            await signedContract.addCID(CID)
        }
    }

    const hackatonManagerContext = useMemo(
        () => ({
            loading,
            initHackatonManager,
            createTracks,
            createSignedContract,
            resetSignedContract,
            registerParticipant,
            addCID,
            fundHackaton,
            hackatonState,
        }),
        [
            loading,
            hackatonState,
            initHackatonManager,
            createTracks,
            createSignedContract,
            resetSignedContract,
            registerParticipant,
            addCID,
            fundHackaton,
        ]
    )

    return hackatonManagerContext
}

const useHackatonManager = () => {
    return useContext(HackatonManagerContext)
}

export default useHackatonManager
