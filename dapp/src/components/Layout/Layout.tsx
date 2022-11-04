import React from "react"
import Header from "components/Header"

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <div className="py-2 sticky top-0 z-50 bg-zinc-800">
                <Header />
            </div>
            {children}
        </div>
    )
}
export default Layout
