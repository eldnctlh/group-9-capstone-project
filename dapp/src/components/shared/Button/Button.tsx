import React from "react"

interface Props {
    children?: React.ReactNode
    onClick: () => void
}

const Button: React.FC<Props> = (props) => {
    return (
        <button
            className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-xl inline-flex items-center z-10 relative"
            {...props}
        ></button>
    )
}
export default Button
