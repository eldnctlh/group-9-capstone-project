import { useState } from "react"
import type { NextPage } from "next"
import Dashboard from "components/Dashboard"
import CreateHackaton from "components/CreateHackaton"
import Button from "components/shared/Button"

const Home: NextPage = () => {
    const [isCreationStep, setIsCreationStep] = useState(false)
    return (
        <>
            <Button className="mt-10" onClick={() => setIsCreationStep(!isCreationStep)}>
                SWITCH TO HACKATON CREATION STEP, BUTTON WILL BE DELETED IN FUTURE
            </Button>
            {isCreationStep ? <CreateHackaton /> : <Dashboard />}
        </>
    )
}

export default Home
