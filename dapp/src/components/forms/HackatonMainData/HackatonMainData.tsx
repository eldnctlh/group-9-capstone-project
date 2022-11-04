import React from "react"
import { useForm, useFieldArray } from "react-hook-form"
import Input from "components/shared/Input"
import Button from "components/shared/Button"

const HackatonMainData: React.FC = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            tracks: [{ trackName: "", trackPrize: "" }],
        },
    })
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "tracks",
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => (
                <div key={item.id} className="flex justify-between items-end">
                    <div className="flex">
                        <Input
                            placeholder={`Track ${index + 1} Name`}
                            label={`Track ${index + 1} Name`}
                            error={
                                errors.tracks &&
                                errors.tracks[index] &&
                                errors.tracks[index].trackName &&
                                "Track name is required."
                            }
                            {...register(`tracks[${index}].trackName`, { required: true })}
                        />
                        <Input
                            placeholder={`Track ${index + 1} Prize`}
                            label={`Track ${index + 1} Prize`}
                            error={
                                errors.tracks &&
                                errors.tracks[index] &&
                                errors.tracks[index].trackPrize &&
                                "Track prize is required."
                            }
                            className="ml-3"
                            {...register(`tracks[${index}].trackPrize`, { required: true })}
                        />
                    </div>
                    {!!index && (
                        <Button className="mb-6" onClick={() => remove(index)}>
                            Delete
                        </Button>
                    )}
                </div>
            ))}

            <div className="flex justify-between">
                <Button
                    className="mt-5"
                    onClick={() => {
                        append({ trackName: "", trackPrize: "" })
                    }}
                >
                    + Add track
                </Button>
                <Button className="mt-5" onClick={() => handleSubmit(onSubmit)}>
                    Create Hackaton
                </Button>
            </div>
        </form>
    )
}
export default HackatonMainData
