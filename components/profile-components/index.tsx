import Image from 'next/image'
import React from 'react'
import profileMainPhoto from "../../public/images/Rectangle 3.png"
import { BsCloudUploadFill } from 'react-icons/bs'
import avatarPhoto from "../../public/images/avatar.jpeg"



const ProfileComponent = () => {
  return (
    <div className='myContainer mt-12 mb-[264px] relative'>
        <div className="relative">
      <Image src={profileMainPhoto} alt=''/> 
      <button className='absolute right-6 bottom-6 flex items-center gap-2 main-btn py-3 rounded-[4px] px-4'><BsCloudUploadFill/> Upload new cover</button>
        </div>
   <div className="avatar-wrapper flex flex-col gap-6 max-w-[200px] -translate-y-[35%] mx-auto ">
    <Image src={avatarPhoto} className='max-w-[160px] max-h-[160px] overflow-hidden rounded-full border-4 mx-auto border-[#FF8682]  object-center object-fill' alt=''/>
   <div className="user-info flex flex-col text-center gap-2 ">
   <h3 className='text-2xl font-semibold'>John Doe</h3>
    <span className='text-base font-normal opacity-75'>john@gmail.com</span>
   </div>
   </div>
      
    </div>
  )
}

export default ProfileComponent
