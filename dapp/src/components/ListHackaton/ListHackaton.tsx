import React, { useState } from "react"
import useHackatonManagerFactory from "utils/context/hackatonManagerFactoryContext"

import Link from "next/link"

const ListHackaton = () => {
    const {listOfHackatons} = useHackatonManagerFactory();
    
return (
        <div className="container mx-auto py-10">
            <h2 className="text-4xl my-5 font-bold text-gray-100">List of Hackatons</h2>
            <p className="mb-4 text-lg text-gray-400">
                
            </p>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                    
                    {listOfHackatons?.map((item) => 
                        <div>
                            <li>{item[0]}
                              <Link href={`/manage-hackaton/${item[1]}`}>
                                <p className="cursor-pointer text-blue-300">
                                    Manage hackaton
                                </p>
                            </Link>
                            <Link href={`/hackaton/${item[1]}`}>
                                <p className="cursor-pointer text-blue-300">
                                    Join hackaton
                                </p>
                            </Link>
                            </li>
                            </div>
                        
                        
                    )}
                </div>

            </div>
        </div>
    )
}

export default ListHackaton
