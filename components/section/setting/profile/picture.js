import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function ProfilePicture({profileImage, setProfileImage}){
    return <div className={twMerge("flex flex-col gap-y-3 items-center")}>
        <div className={twMerge("relative","w-24 h-24")}>
             <Image fill={true} src={"/profile-picture-placeholder.png"} alt="Profile Picture Placeholder"/>
        </div>
        <p className={twMerge("text-black")}>Add photo</p>
    </div>
}