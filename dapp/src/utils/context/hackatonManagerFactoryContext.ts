import { ethers, BigNumber, Contract, Signer } from "ethers"
import { createContext, useContext, useMemo, useState } from "react"
import abi from "constants/abi/hackatonManagerFactoryAbi"
import contractAddresses from "constants/contractAddresses"

type HackatonManagerFactory = {
    deploymentFee: undefined | BigNumber
    loading: boolean
    initHackatonManager: () => void
    createNewHack: (name: string) => string
    createSignedContract: (signer: Signer) => void
    resetSignedContract: () => void
    getHackContractAddress: (name: string) => Promise<string | undefined>
}

export const HackatonManagerFactoryContext = createContext<HackatonManagerFactory>({})

export const useHackatonManagerFactoryContext = () => {
    const [signedContract, setSignedContract] = useState<Contract>()
    const [loading, setLoading] = useState<boolean>(false)
    const [deploymentFee, setDeploymentFee] = useState<BigNumber>()

    const createSignedContract = (signer: Signer) => {
        const сontract_ = new ethers.Contract(
            contractAddresses.hackatonManagerFactoryContract,
            abi.abi,
            signer
        )
        setSignedContract(сontract_)
    }

    const resetSignedContract = () => {
        setSignedContract(null)
    }

    const initHackatonManager = async () => {
        setLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const сontract_ = new ethers.Contract(
            contractAddresses.hackatonManagerFactoryContract,
            abi.abi,
            provider
        )
        const [deploymentFee] = await Promise.all([сontract_.deploymentFee()])
        setDeploymentFee(deploymentFee)
        setLoading(false)
    }

    const createNewHack = async (name: string) => {
        if (signedContract) {
            setLoading(true)
            const txReceipt = await signedContract.createNewHack(name, {
                value: deploymentFee,
            })
            const res = await txReceipt.wait()
            const event = res.events?.find((event) => event.event === "HackCreated")
            const hackatonAddress = event?.args?._contractAddress
            setLoading(false)
            return hackatonAddress
        }
    }

    const getHackContractAddress = async (name: string) => {
        if (signedContract) {
            const address = await signedContract.getHackContractAddress(name)
            return address
        }
    }

    const hackatonManagerFactoryContext = useMemo(
        () => ({
            deploymentFee,
            loading,
            initHackatonManager,
            createNewHack,
            getHackContractAddress,
            createSignedContract,
            resetSignedContract,
        }),
        [
            deploymentFee,
            loading,
            initHackatonManager,
            createNewHack,
            getHackContractAddress,
            createSignedContract,
            resetSignedContract,
        ]
    )

    return hackatonManagerFactoryContext
}

const useHackatonManagerFactory = () => {
    return useContext(HackatonManagerFactoryContext)
}

export default useHackatonManagerFactory
