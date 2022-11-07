import { useEffect, useState } from "react"
import { BigNumber, Contract, ethers } from "ethers"
import abi from "constants/abi/hackatonManagerFactoryAbi"
import contractAddresses from "constants/contractAddresses"
import useWallet from "./useWallet"

const useHackatonManagerFactory = () => {
    const [signedContract, setSignedContract] = useState<Contract>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
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
        setIsLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const сontract_ = new ethers.Contract(
            contractAddresses.hackatonManagerFactoryContract,
            abi.abi,
            provider
        )
        const [deploymentFee] = await Promise.all([сontract_.deploymentFee()])
        console.log(deploymentFee)
        setDeploymentFee(deploymentFee)
        setIsLoading(false)
    }

    const createNewHack = async (name: string) => {
        if (signedContract) {
            await signedContract.createNewHack(name, { value: deploymentFee })
        }
    }

    const getHackContractAddress = async (name: string) => {
        if (signedContract) {
            const address = await signedContract.getHackContractAddress(name)
            return address
        }
    }
    return { isLoading, deploymentFee, initHackatonManager, createNewHack, getHackContractAddress }
}

export default useHackatonManagerFactory
