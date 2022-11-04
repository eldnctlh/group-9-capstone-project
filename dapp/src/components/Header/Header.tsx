import React, { useEffect, useState } from "react"
import { ethers, Signer } from "ethers"
import { truncateEthAddress } from "src/utils/helpers"

const Header = () => {
    const [provider, setProvider] = useState<any>(null)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [account, setAccount] = useState<string>("")
    const [userBalance, setUserBalance] = useState<string>("")

    useEffect(() => {
        if (window) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            setProvider(provider)
        }
    }, [])

    const handleConnectWallet = () => {
        if (window.ethereum) {
            provider.send("eth_requestAccounts", []).then(async () => {
                await handleChangeAccount(provider.getSigner())
            })
        } else {
            setErrorMessage("Please Install Metamask!!!")
        }
    }

    const handleDisconnectWallet = () => {
        setAccount("")
    }

    const handleChangeAccount = async (newAccount: Signer) => {
        const address = await newAccount.getAddress()
        setAccount(address)
        const balance = await newAccount.getBalance()
        setUserBalance(ethers.utils.formatEther(balance))
        await getuserBalance(address)
    }

    const getuserBalance = async (address: string) => {
        const balance = await provider.getBalance(address, "latest")
    }

    return (
        <div className="py-2">
            <button
                className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-xl inline-flex items-center z-10 relative"
                onClick={account ? handleDisconnectWallet : handleConnectWallet}
            >
                {account ? truncateEthAddress(account) : "Connect"}
            </button>
            {account && userBalance ? (
                <span className="bg-blue-200 text-blue-800 -m-4 py-2 px-4 pl-6 font-bold rounded-r-xl inline-flex items-center">
                    {(+userBalance).toFixed(2)} ETH
                </span>
            ) : null}
            {errorMessage}
        </div>
    )
}
export default Header
