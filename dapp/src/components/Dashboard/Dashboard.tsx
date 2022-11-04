import React, { useEffect, useState } from "react"
import Button from "components/shared/Button"

const Dashboard = () => {
    return (
        <div className="mt-10 py-10 bg-zinc-800">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white">NEAR MetaBUILD III Hackathon</h2>
                <p className="my-4 text-lg text-gray-400">
                    Our world has changed. Meet new challenges in a way a true buidler would do –
                    hack your way to the top. Build the next big thing on NEAR.
                </p>
                <Button onClick={() => console.log(1)}>Join Hackaton</Button>
            </div>
        </div>
    )
}
export default Dashboard
