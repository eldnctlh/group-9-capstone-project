import { createContext, useContext, useMemo, useState } from "react"

export const WalletContext = createContext(null)

type Wallet = {
    address: null | string
}

const defaultWallet: Wallet = {
    address: null,
}

export const useWalletContext = () => {
    const [wallet, setWallet] = useState(defaultWallet)

    const walletContext = useMemo(
        () => ({
            wallet,
            setWallet,
            setWalletAddress,
        }),
        [wallet, setWallet]
    )

    const setWalletAddress = (address: string | null) => setWallet({ ...wallet, address })

    return walletContext
}

const useWallet = () => {
    return useContext(WalletContext)
}

export default useWallet
