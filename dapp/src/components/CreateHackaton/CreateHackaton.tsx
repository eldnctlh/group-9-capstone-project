import React from "react"
import { ethers } from "ethers"
import useHackatonManagerFactory from "utils/context/hackatonManagerFactoryContext"
import CreateHackatonForm from "components/forms/CreateHackaton"

const CreateHackaton = () => {
    const { deploymentFee } = useHackatonManagerFactory()

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-4xl my-5 font-bold text-gray-100">Create Hackaton</h2>
            <p className="mb-4 text-lg text-gray-400">
                Hackaton deployment fee:{" "}
                {deploymentFee ? `${ethers.utils.formatEther(deploymentFee)} ETH` : null}
            </p>
            <CreateHackatonForm />
        </div>
    )
}

export default CreateHackaton
