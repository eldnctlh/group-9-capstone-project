import { Web3Storage } from "web3.storage"

const makeStorageClient = () => {
    return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })
}

export const makeFileObjects = async (dataObject: any, fileName: any) => {
    const blob = new Blob([JSON.stringify(dataObject)], {
        type: "application/json",
    })
    const files = [new File([blob], fileName)]
    return files
}

export const storeFiles = async (files: any) => {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log("stored files with cid:", cid)
    return cid
}

export const retrieve = async (cid: string) => {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
        throw new Error(`failed to get ${cid}`)
    }
    return res
}
