import { useEffect, useState } from "react"
import { Contract, ethers } from "ethers"
import abi from "constants/abi/hackatonAbi"
import contractAddresses from "constants/contractAddresses"
import useWallet from "./useWallet"

const useHackatonContract = () => {
    const [contract, setContract] = useState<Contract>()
    const [provider, setProvider] = useState<ethers.providers.Provider>()
    const [signer, setSigner] = useState<ethers.Signer>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { wallet } = useWallet()

    const initContract = async () => {
        setIsLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const сontract = new ethers.Contract(
            contractAddresses.hackatonContract,
            abi.abi,
            wallet.signer
        )

        setSigner(wallet.signer)
        setProvider(provider)
        setContract(сontract)
        // const tokenName = await tokenContract.name()
        // setLotteryState({
        //     tokenName,
        // })
        setIsLoading(false)
    }

    return { isLoading, initContract }
}

export default useHackatonContract
