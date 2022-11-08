import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Input from "components/shared/Input"
import Button from "components/shared/Button"
import useHackatonManagerFactory from "utils/context/hackatonManagerFactoryContext"
import useWallet from "utils/context/walletContext"

const CreateHackaton: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { createNewHack } = useHackatonManagerFactory()
    const { wallet } = useWallet()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: any) => {
        setIsLoading(true)
        console.log(wallet)
        createNewHack(data.name)
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="Hackaton Name"
                label="Hackaton Name"
                error={errors.name && "Hackaton name is required."}
                {...register("name", { required: true })}
            />
            <Button isLoading={isLoading} className="mt-5">
                Create Hackaton
            </Button>
        </form>
    )
}
export default CreateHackaton
