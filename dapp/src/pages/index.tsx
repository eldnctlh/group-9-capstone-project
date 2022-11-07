import type { NextPage } from "next"
import Dashboard from "components/Dashboard"
import CreateHackaton from "components/CreateHackaton"
import Layout from "components/Layout"
import Button from "components/shared/Button"
import { useState } from "react"
import useWallet, { useWalletContext, WalletContext } from "utils/hooks/useWallet"

const Home: NextPage = () => {
    const [isCreationStep, setIsCreationStep] = useState(false)
    const walletContext = useWalletContext()
    return (
        <WalletContext.Provider value={walletContext}>
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
