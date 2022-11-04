import React from "react"
import { useForm } from "react-hook-form"
import Input from "components/shared/Input"
import Button from "components/shared/Button"

const JoinHackaton: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Input
                {...register("firstName", { required: true })}
                label="First Name"
                placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500">First name is required.</p>}
            <Input
                placeholder="Last Name"
                label="Last Name"
                {...register("lastName", { required: true })}
            />
            {errors.lastName && <p className="text-red-500">Last name is required.</p>}
            <Input
                placeholder="Age"
                label="Age"
                {...register("age", { required: true, pattern: /\d+/ })}
            />
            {errors.age && <p className="text-red-500">Please enter number for age.</p>}
            <Button className="mt-5">Submit</Button>
        </form>
    )
}
export default JoinHackaton
