import { useEffect } from "react"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useWalletContext, WalletContext } from "utils/context/walletContext"
import {
    useHackatonManagerFactoryContext,
    HackatonManagerFactoryContext,
} from "utils/context/hackatonManagerFactoryContext"
import Layout from "components/Layout"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
    const walletContext = useWalletContext()
    const hackatonManagerFactoryContext = useHackatonManagerFactoryContext()

    useEffect(() => {
        hackatonManagerFactoryContext.initHackatonManager()
    }, [])

    return (
        <HackatonManagerFactoryContext.Provider value={hackatonManagerFactoryContext}>
            <WalletContext.Provider value={walletContext}>
                <ToastContainer theme="dark" />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </WalletContext.Provider>
        </HackatonManagerFactoryContext.Provider>
    )
}

export default MyApp
