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
}

type HackatonState = {
    name: string
}

const defaultHackatonState: HackatonState = {
    name: "",
}

export const HackatonManagerContext = createContext<HackatonManager>({})

export const useHackatonManagerContext = () => {
    const [signedContract, setSignedContract] = useState<Contract>()
    const [loading, setLoading] = useState<boolean>(false)
    const [contractAddress, setContractAddress] = useState<string>("")
    const [hackatonState, setHackatonState] = useState<HackatonState>(defaultHackatonState)

    const createSignedContract = (signer: Signer) => {
        const сontract_ = new ethers.Contract(contractAddress, abi.abi, signer)
        setSignedContract(сontract_)
    }

    const resetSignedContract = () => {
        setSignedContract(undefined)
    }

    const initHackatonManager = async (contractAddress: string) => {
        setLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract_ = new ethers.Contract(contractAddress, abi.abi, provider)
        const [name] = await Promise.all([contract_._hackathonName()])
        setHackatonState({
            name,
        })
        setContractAddress(contractAddress)
        setLoading(false)
    }

    const createTracks = async (track: Track) => {
        if (signedContract) {
            setLoading(true)
            await signedContract.createTrack(track.trackName, track.trackPrize)
            setLoading(false)
        }
    }

    const registerParticipant = async (participant: Participant) => {
        if (signedContract) {
            setLoading(true)
            await signedContract.registerParticipant(
                participant.teamName,
                participant.projectName,
                participant.projectLink
            )
            setLoading(false)
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
        ]
    )

    return hackatonManagerContext
}

const useHackatonManager = () => {
    return useContext(HackatonManagerContext)
}

export default useHackatonManager
