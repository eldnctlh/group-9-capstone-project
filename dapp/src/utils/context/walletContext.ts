import { Signer } from "ethers"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Wallet = {
    address: null | string
    signer: null | Signer
}

const defaultWallet: Wallet = {
    address: null,
    signer: null,
}

export const WalletContext = createContext({})

export const useWalletContext = () => {
    const [wallet, setWallet] = useState(defaultWallet)

    const disconnectWallet = () => setWallet(defaultWallet)

    useEffect(() => {
        if (wallet.signer) {
            ;(async () => {
                const address = await wallet.signer.getAddress()
                setWallet({ ...wallet, address })
            })()
        }
    }, [wallet.signer])

    const setWalletSigner = (signer: Signer) => setWallet({ ...wallet, signer })

    const walletContext = useMemo(
        () => ({
            wallet,
            setWallet,
            setWalletSigner,
            disconnectWallet,
        }),
        [wallet, setWallet, setWalletSigner, disconnectWallet]
    )

    return walletContext
}

const useWallet = () => {
    return useContext(WalletContext)
}

export default useWallet
