import React, { useEffect, useState } from "react"
import useHackatonManagerFactory from "utils/context/hackatonManagerFactoryContext"

import Link from "next/link"
import Loader from "components/shared/Loader"
import Button from "components/shared/Button"

const ListHackaton = () => {
    const { listOfHackatons, initHackatonManagerFactory, loading } = useHackatonManagerFactory()

    useEffect(() => {
        initHackatonManagerFactory()
    }, [])

    const HackatonComponent = ({ name, address }: any) => {
        return (
            <div className="flex flex-row justify-between w-[35rem]">
                <div>
                    <h1 className="text-2xl">{name}</h1>
                    <div className="flex flex-row justify-between w-[25rem] px-4">
                        <div>Online</div>
                        <div>Participants</div>
                        <div>Prize</div>
                    </div>
                    <div className="flex flex-row justify-around">
                        <div>Mobile</div>
                        <div>Web</div>
                        <div>Low Code</div>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center">
                    <Link href={`/manage-hackaton/${address}`}>
                        <Button className="w-44 mb-2">Manage hackaton</Button>
                    </Link>
                    <Link href={`/hackaton/${address}`}>
                        <Button className="w-44 mb-2">Join hackaton</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl my-5 font-bold text-gray-100">List of Hackatons</h2>
            {loading ? (
                <div className="flex justify-center">
                    <Loader />
                </div>
            ) : (
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2">
                        {listOfHackatons?.map((item) => (
                            <HackatonComponent name={item[0]} address={item[1]} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListHackaton
