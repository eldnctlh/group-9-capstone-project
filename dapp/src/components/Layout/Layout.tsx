import React from "react"
import Header from "components/Header"

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default Layout
