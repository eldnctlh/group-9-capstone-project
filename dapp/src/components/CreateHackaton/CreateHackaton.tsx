import React, { useEffect } from "react"
import HackatonMainData from "components/forms/HackatonMainData"
import HackatonExtraData from "components/forms/HackatonExtraData"
import useHackatonManagerFactory from "utils/hooks/useHackatonManagerFactory"
import { ethers } from "ethers"

const CreateHackaton = () => {
    const { initHackatonManager, deploymentFee } = useHackatonManagerFactory()
    useEffect(() => {
        initHackatonManager()
    }, [])
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 bg-zinc-800 px-10">
                    <h2 className="text-4xl my-5 font-bold text-gray-100">Create Hackaton</h2>
                    <p className="mb-4 text-lg text-gray-400">
                        Hackaton deployment fee:{" "}
                        {deploymentFee ? `${ethers.utils.formatEther(deploymentFee)} ETH` : null}
                    </p>
                    <HackatonMainData />
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl my-5 font-bold text-gray-100">
                        Add extra data for hackaton
                    </h2>
                    <HackatonExtraData />
                </div>
            </div>
        </div>
    )
}

export default CreateHackaton
