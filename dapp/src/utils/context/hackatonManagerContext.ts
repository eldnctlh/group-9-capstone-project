import { ethers, BigNumber, Contract, Signer } from "ethers"
import { createContext, useContext, useMemo, useState } from "react"
import abi from "constants/abi/hackatonManagerAbi"
// import { retrieve } from "utils/services/web3Storage"

export type Track = {
    trackName: string
    trackPrize: string
}

type OnChainTrack = {
    name: string
    poolAmount: number
    prizeTotal: number
}

export type Participant = {
    teamName: string
    projectName: string
    projectLink: string
}

enum HackatonCurrentState {
    Upcoming = "upcoming",
    Open = "open",
    Closed = "closed",
    Concluded = "concluded",
}

type HackatonState = {
    name: string
    description: string
    CID: string
    funds: null | BigNumber
    funded: boolean
    state: HackatonCurrentState
    tracks: OnChainTrack[]
}

type HackatonManager = {
    loading: boolean
    hackatonState: HackatonState
    initHackatonManager: (address: string) => void
    createSignedContract: (signer: Signer) => void
    resetSignedContract: () => void
    createTracks: (tracks: Track) => void
    registerParticipant: (participant: Participant) => void
    addCID: (CID: string) => void
    fundHackaton: (amount: string) => void
}

const defaultHackatonState: HackatonState = {
    name: "",
    description: "",
    CID: "",
    funds: null,
    funded: false,
    state: HackatonCurrentState.Upcoming,
    tracks: [],
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
        const state = await contract_.getHackathonState()

        const [name, CID] = await Promise.all([contract_._hackathonName(), contract_.getCID()])
        const length = (await contract_.getCurrentMaxIndexOfTracks()).toNumber()
        const tracks: OnChainTrack[] = []
        for (let i = 0; i <= length; i++) {
            const trackName = await contract_.getTrackByIndex(i)
            const track = await contract_._hackathonTracks(trackName)
            tracks.push({
                name: track._trackName,
                poolAmount: track._trackPoolAmount,
                prizeTotal: track._currentPrizeTotal,
            })
        }
        let description = ""
        if (CID) {
            // const res = await retrieve(CID)
            // const files = await res?.files()
            // if (files && files.length) {
            //     const json = JSON.parse(await files[0].text())
            //     description = json.description
            // }
        }
        setHackatonState({
            name,
            CID,
            funds,
            funded,
            state,
            description,
            tracks,
        })
        setContractAddress(contractAddress)
        setLoading(false)
    }

    const createTracks = async (track: Track) => {
        if (signedContract) {
            const rc = await signedContract.createTrack(
                track.trackName,
                ethers.utils.parseEther(track.trackPrize)
            )
            await rc.wait()
        }
    }

    const registerParticipant = async (participant: Participant) => {
        if (signedContract) {
            const rc = await signedContract.registerParticipant(
                participant.teamName,
                participant.projectName,
                participant.projectLink
            )
            await rc.wait()
        }
    }

    const fundHackaton = async (amount: string) => {
        if (signedContract) {
            const rc = await signedContract.fundHackathon({
                value: ethers.utils.parseEther(amount),
            })
            await rc.wait()
            setHackatonState({
                ...hackatonState,
                funded: true,
            })
        }
    }

    const addCID = async (CID: string) => {
        if (signedContract) {
            const rc = await signedContract.addCID(CID)
            await rc.wait()
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
