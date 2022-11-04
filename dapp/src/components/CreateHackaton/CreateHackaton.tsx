import React from "react"
import HackatonMainData from "components/forms/HackatonMainData"
import HackatonExtraData from "components/forms/HackatonExtraData"

interface Props {}

const CreateHackaton = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                    <h2 className="text-4xl my-5 font-bold text-gray-100">Create Hackaton</h2>
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
