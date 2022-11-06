import { useEffect, useState } from "react"
import { Web3Storage } from "web3.storage"

const useWeb3Storage = () => {
    const [token, setToken] = useState<string>("")

    useEffect(() => {
        if (process.env.WEB3STORAGE_TOKEN) setToken(process.env.WEB3STORAGE_TOKEN)
    }, [])

    function makeStorageClient() {
        return new Web3Storage({ token })
    }

    function makeFileObjects(dataObject: any, fileName: any) {
        const blob = new Blob([JSON.stringify(dataObject)], {
            type: "application/json",
        })
        const files = [
            new File(["contents-of-file-1"], "plain-utf8.txt"),
            new File([blob], fileName),
        ]
        return files
    }

    async function storeFiles(files: any) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        console.log("stored files with cid:", cid)
        return cid
    }

    return {
        makeFileObjects,
        storeFiles,
    }
}

export default useWeb3Storage
