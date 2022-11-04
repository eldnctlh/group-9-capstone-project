import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Input from "components/shared/Input"
import Button from "components/shared/Button"

const HackatonExtraData: React.FC = () => {
    const [coverImageSrc, setCoverImageSrc] = useState<string>("")
    const [profileImageSrc, setProfileImageSrc] = useState<string>("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const watchProfileImage = watch("profileImage")
    const watchCoverImage = watch("coverImage")

    useEffect(() => {
        if (watchProfileImage && watchProfileImage.length) {
            if (watchProfileImage[0]) {
                setProfileImageSrc(URL.createObjectURL(watchProfileImage[0]))
            }
        }
    }, [watchProfileImage])

    useEffect(() => {
        if (watchCoverImage && watchCoverImage.length) {
            if (watchCoverImage[0]) {
                setCoverImageSrc(URL.createObjectURL(watchCoverImage[0]))
            }
        }
    }, [watchCoverImage])

    const onSubmit = (data: any) => {
        console.log(data)
        const formData = new FormData()
        formData.append("profileImage", data.profileImage[0])
        formData.append("coverImage", data.coverImage[0])
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="Hackaton Name"
                label="Hackaton Name"
                error={errors.name && "Hackaton name is required."}
                {...register("name", { required: true })}
            />
            <Input
                placeholder="Hackaton Description"
                label="Hackaton Description"
                error={errors.description && "Hackaton description is required."}
                {...register("description", { required: true })}
            />
            <Input
                label="Profile Image"
                type="file"
                error={errors.profileImage && "Profile image is required."}
                {...register("profileImage", { required: true })}
            />
            {profileImageSrc ? (
                <img className="w-full my-5" src={profileImageSrc} alt="profileImage" />
            ) : null}
            <Input
                label="Cover Image"
                type="file"
                error={errors.coverImage && "Cover image is required."}
                {...register("coverImage", { required: true })}
            />
            {coverImageSrc ? (
                <img className="w-full my-5" src={coverImageSrc} alt="coverImage" />
            ) : null}

            <Button className="mt-5">Create Hackaton</Button>
        </form>
    )
}
export default HackatonExtraData
