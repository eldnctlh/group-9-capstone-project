import { useEffect } from "react"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useHackatonManagerFactory from "utils/hooks/useHackatonManagerFactory"
import { useWalletContext, WalletContext } from "utils/hooks/useWallet"
import Layout from "components/Layout"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { initHackatonManager } = useHackatonManagerFactory()
    const walletContext = useWalletContext()

    useEffect(() => {
        initHackatonManager()
    }, [])

    return (
        <WalletContext.Provider value={walletContext}>
            <ToastContainer theme="dark" />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </WalletContext.Provider>
    )
}

export default MyApp
