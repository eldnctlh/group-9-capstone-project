import type { NextPage } from "next"
import Dashboard from "components/Dashboard"
import CreateHackaton from "components/CreateHackaton"
import Layout from "components/Layout"
import Button from "components/shared/Button"
import { useState } from "react"

const Home: NextPage = () => {
    const [isCreationStep, setIsCreationStep] = useState(false)
    return (
        <Layout>
            <Button className="mt-10" onClick={() => setIsCreationStep(!isCreationStep)}>
                SWITCH TO HACKATON CREATION STEP, BUTTON WILL BE DELETED IN FUTURE
            </Button>
            {isCreationStep ? <CreateHackaton /> : <Dashboard />}
        </Layout>
    )
}

export default Home
