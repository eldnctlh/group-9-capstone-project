import React, { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import Input from "components/shared/Input"
import Button from "components/shared/Button"
import useHackatonManager, { PriceForTrack } from "utils/context/hackatonManagerContext"
import useWallet from "utils/context/walletContext"
import { ethers } from "ethers"
import { extractRevertReason } from "utils/helpers"

const AddPrizeToTrack: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { addCID, hackatonState, addPrizeToTrack } = useHackatonManager()

    const { query } = useRouter()
    const { connected } = useWallet()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async data => { 
        console.log(data);
    
        setLoading(true)

        const addPrice : PriceForTrack =
        {
            trackName: data.trackName,
            prizeAmount: data.prizeAmount,
            prizeName : data.prizeName
        }
            
            try {
                await  addPrizeToTrack(addPrice)
                
                toast(`${addPrice.prizeName} added to track ${addPrice.trackName} for a whopping: ${addPrice.prizeAmount} ETH`)
            } catch (err) {
                const msg = extractRevertReason(err)

                console.log(err)
                toast.error(msg || err.message)
            }
        
        setLoading(false)
    }
    const renderTracks = () =>
    hackatonState.tracks.length ? (
        <div>
            <div className="flex items-center mt-4">
                <h2 className="text-xl font-bold text-gray-200 whitespace-nowrap">
                    Add prize
                </h2>
                <div className="ml-5 h-px w-full bg-zinc-400"></div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {hackatonState.tracks.map((track) => (
                    
                    <div key={track.name} className="col-span-2 mt-2">
                        <h3 className="mt-1 font-bold text-gray-200">{track.name}</h3>
                        <p className="mt-1 text-gray-400">
                            {ethers.utils.formatEther(track.poolAmount)} ETH
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
         
                <div  className="flex justify-between items-end">
                    <div className="flex">
                        <input {...register("trackName")} value ={track.name} type="hidden" />
                        <Input
                            placeholder={`Prize Name`}
                            label={`Prize Name`}
                            error={
                                errors.prizeName &&
                                "Prize name is required."
                            }
                            {...register(`prizeName`, { required: true })}
                        />
                        <Input
                            placeholder={`Prize`}
                            label={`Prize (ETH)`}
                            error={
                                errors.prizeAmount &&
                                "Prize is required."
                            }
                            className="ml-3"
                            {...register(`prizeAmount`, { required: true })}
                        />
                    </div>
 
                </div>
            

            <div className="flex justify-between">
                <Button
                    loading={loading}
                    disabled={!connected || loading}
                    className="mt-5"
                    onClick={() => handleSubmit(onSubmit)}
                >
                    Add Prize
                </Button>
            </div>
        </form>
                    </div>
                    
                ))}
            </div>
            <div className="mt-4 mb-10 h-px w-full bg-zinc-400"></div>
        </div>
    ) : null

    const renderForms = () => {
        
        if (hackatonState.funded) {
            return (
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 bg-zinc-800 px-10 py-10">
                        <p className="mb-2 text-lg text-gray-400">
                            Total amount of funds: {ethers.utils.formatEther(hackatonState.funds)}{" "}
                            ETH
                        </p>

                        {renderTracks()}                       
                    </div>                  
                </div>            
            )
        } else {
            return (
                <div className="grid grid-cols-5 gap-4">
    
                </div>
            )
        }
    }

    
    return (
       
      
        <div className="container mx-auto py-10">
            {renderForms()}
            
            </div>
    )
}
export default AddPrizeToTrack
