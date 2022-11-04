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
                label="First Name"
                placeholder="First Name"
                error={errors.firstName && "First name is required."}
                {...register("firstName", { required: true })}
            />
            <Input
                placeholder="Last Name"
                label="Last Name"
                error={errors.lastName && "Last name is required."}
                {...register("lastName", { required: true })}
            />
            <Input
                placeholder="Age"
                label="Age"
                error={errors.age && "Please enter number for age."}
                {...register("age", { required: true, pattern: /\d+/ })}
            />
            <Button className="mt-5">Submit</Button>
        </form>
    )
}
export default JoinHackaton
