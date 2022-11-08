import { ethers, BigNumber, Contract } from "ethers"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import abi from "constants/abi/hackatonManagerFactoryAbi"
import contractAddresses from "constants/contractAddresses"
import useWallet from "utils/context/walletContext"

type HackatonManagerFactory = {
    deploymentFee: undefined | BigNumber
    loading: boolean
    initHackatonManager: () => void
    createNewHack: (name: string) => void
    getHackContractAddress: (name: string) => Promise<string | undefined>
}

export const HackatonManagerFactoryContext = createContext<HackatonManagerFactory>({})

export const useHackatonManagerFactoryContext = () => {
    const [signedContract, setSignedContract] = useState<Contract>()
    const [loading, setLoading] = useState<boolean>(false)
    const [deploymentFee, setDeploymentFee] = useState<BigNumber>()
    const { wallet } = useWallet()

    useEffect(() => {
        if (wallet && wallet.signer && !signedContract) {
            const сontract_ = new ethers.Contract(
                contractAddresses.hackatonManagerFactoryContract,
                abi.abi,
                wallet.signer
            )
            setSignedContract(сontract_)
        }
    }, [wallet])

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
        console.log(wallet)
        console.log(signedContract)
        if (signedContract) {
            const res = await signedContract.createNewHack(name, { value: deploymentFee })
            console.log(res)
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
        }),
        [deploymentFee, loading, initHackatonManager, createNewHack, getHackContractAddress]
    )

    return hackatonManagerFactoryContext
}

const useHackatonManagerFactory = () => {
    return useContext(HackatonManagerFactoryContext)
}

export default useHackatonManagerFactory
