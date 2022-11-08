import type { NextPage } from "next"
import Button from "components/shared/Button"
import Link from "next/link"

const Home: NextPage = () => {
    return (
        <>
            <Link href="/create-hackaton">
                <Button className="mt-10" onClick={() => null}>
                    Create new hackaton
                </Button>
            </Link>
            Landing page here
        </>
    )
}

export default Home
