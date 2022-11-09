import React, { useEffect } from "react"
import { useRouter } from "next/router"
import HackatonMainData from "components/forms/HackatonMainData"
import HackatonExtraData from "components/forms/HackatonExtraData"
import FundHackaton from "components/forms/FundHackaton"
import useHackatonManager from "utils/context/hackatonManagerContext"
import Loader from "components/shared/Loader"

const HackatonDetails = () => {
    const { initHackatonManager, hackatonState, loading } = useHackatonManager()
    const { query } = useRouter()

    useEffect(() => {
        if (query.address) {
            initHackatonManager(query.address)
        }
    }, [query.address])

    const renderForms = () => {
        if (hackatonState.funded) {
            return (
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 bg-zinc-800 px-10 py-10">
                        <h2 className="text-4xl my-5 font-bold text-gray-100">Manage Hackaton</h2>
                        <HackatonMainData />
                    </div>
                    <div className="col-span-2 py-10">
                        <h2 className="text-4xl my-5 font-bold text-gray-100">
                            Add extra data for hackaton
                        </h2>
                        <HackatonExtraData />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 bg-zinc-800 px-10 py-10">
                        <h2 className="text-4xl my-5 font-bold text-gray-100">Fund Hackaton</h2>
                        <FundHackaton />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="container mx-auto py-10">
            {loading ? (
                <div className="flex justify-center">
                    <Loader />
                </div>
            ) : (
                renderForms()
            )}
        </div>
    )
}

export default HackatonDetails
