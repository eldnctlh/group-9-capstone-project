import { useEffect, useMemo } from "react"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useWallet, { useWalletContext, WalletContext } from "utils/context/walletContext"
import {
    useHackatonManagerFactoryContext,
    HackatonManagerFactoryContext,
} from "utils/context/hackatonManagerFactoryContext"
import Layout from "components/Layout"
import "../styles/globals.css"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }: AppProps) => {
    const walletContext = useWalletContext()
    const hackatonManagerFactoryContext = useHackatonManagerFactoryContext()
    const router = useRouter()

    useEffect(() => {
        hackatonManagerFactoryContext.initHackatonManager()
    }, [])

    const Wrapper = useMemo(() => {
        if (router.pathname == "/") return (props: any) => <>{props.children}</>
        return Layout
    }, [router])

    return (
        <HackatonManagerFactoryContext.Provider value={hackatonManagerFactoryContext}>
            <WalletContext.Provider value={walletContext}>
                <ToastContainer theme="dark" />
                <Wrapper>
                    <Component {...pageProps} />
                </Wrapper>
            </WalletContext.Provider>
        </HackatonManagerFactoryContext.Provider>
    )
}

export default MyApp
