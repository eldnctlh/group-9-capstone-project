import React, { useEffect, useState } from "react"
import { DateTime } from "luxon"
import Button from "components/shared/Button"

const Dashboard = () => {
    const [deadline, setDeadline] = useState<string>("")

    useEffect(() => {
        setDeadline(DateTime.now().toString())
    }, [])

    const renderPrize = () => (
        <div>
            <h3 className="my-2 text-lg font-bold text-gray-100">
                Native Track Prizes | First Place
            </h3>
            <p className="my-2 text-lg text-gray-100">$100,000 USD in NEAR</p>
        </div>
    )

    return (
        <div>
            <div className="mt-10 py-10 bg-zinc-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-3">
                            <h2 className="text-4xl font-bold text-white">
                                NEAR MetaBUILD III Hackathon
                            </h2>
                            <p className="my-4 text-lg text-gray-400">
                                Our world has changed. Meet new challenges in a way a true buidler
                                would do – hack your way to the top. Build the next big thing on
                                NEAR.
                            </p>
                            <Button onClick={() => console.log(1)}>Join Hackaton</Button>
                        </div>
                        <div className="col-span-2 bg-zinc-700 p-3">
                            <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-300 text-green-800 rounded-full">
                                17 days to deadline
                            </div>
                            <h3 className="my-4 text-lg font-bold text-white">
                                Deadline {deadline}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3">
                        <div className="flex items-center">
                            <h2 className="text-4xl font-bold text-gray-100">Prizes</h2>
                            <div className="ml-5 h-px w-full bg-zinc-400"></div>
                        </div>
                        <div className="grid my-4 grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <h3 className="my-2 text-lg font-bold text-gray-100">
                                    $1,000,000 in prizes
                                </h3>
                                <p className="my-2 text-lg text-gray-100">
                                    Prizes paid in cryptocurrency
                                </p>
                            </div>
                            {renderPrize()}
                            {renderPrize()}
                            {renderPrize()}
                            {renderPrize()}
                            {renderPrize()}
                            {renderPrize()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard