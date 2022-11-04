import type { NextPage } from "next"
import Dashboard from "components/Dashboard"
import Layout from "components/Layout"

const Home: NextPage = () => {
    return (
        <Layout>
            <Dashboard />
        </Layout>
    )
}

export default Home
