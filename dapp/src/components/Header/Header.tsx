import React, { useEffect, useState } from "react"
import { ethers, Signer } from "ethers"
import { truncateEthAddress } from "utils/helpers"
import Button from "components/shared/Button"

const Header: React.FC<Props> = () => {
    const [account, setAccount] = useState<string>("")
    const [userBalance, setUserBalance] = useState<string>("")

    useEffect(() => {
        if (window) {
            window.ethereum.on("accountsChanged", function (accounts) {
                handleConnectWallet()
            })
            window.ethereum.on("chainChanged", function (accounts) {
                handleConnectWallet()
            })
        }
    }, [])

    const handleConnectWallet = () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            provider.send("eth_requestAccounts", []).then(async () => {
                await handleChangeAccount(provider.getSigner())
            })
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
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        const balance = await provider.getBalance(address, "latest")
    }

    return (
        <div className="container mx-auto py-2 flex justify-end items-center">
            <Button onClick={account ? handleDisconnectWallet : handleConnectWallet}>
                {account ? truncateEthAddress(account) : "Connect"}
            </Button>
            {account && userBalance ? (
                <span className="bg-blue-200 text-blue-800 -m-4 py-2 px-4 pl-6 font-bold rounded-r-xl inline-flex items-center">
                    {(+userBalance).toFixed(2)} ETH
                </span>
            ) : null}
        </div>
    )
}
export default Header
