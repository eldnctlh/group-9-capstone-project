import { useState } from "react"
import type { NextPage } from "next"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Dashboard from "components/Dashboard"
import CreateHackaton from "components/CreateHackaton"
import Layout from "components/Layout"
import Button from "components/shared/Button"

import { useWalletContext, WalletContext } from "utils/hooks/useWallet"

const Home: NextPage = () => {
    const [isCreationStep, setIsCreationStep] = useState(false)
    const walletContext = useWalletContext()
    return (
        <WalletContext.Provider value={walletContext}>
            <ToastContainer theme="dark" />
            <Layout>
                <Button className="mt-10" onClick={() => setIsCreationStep(!isCreationStep)}>
                    SWITCH TO HACKATON CREATION STEP, BUTTON WILL BE DELETED IN FUTURE
                </Button>
                {isCreationStep ? <CreateHackaton /> : <Dashboard />}
            </Layout>
        </WalletContext.Provider>
    )
}

export default Home
