import React from 'react'
import EditIcon from '../helperComponents/EditIcon'
import { AiFillPlusCircle } from 'react-icons/ai'
import useGetData from '../../custom-hooks/getData';
import { IUser } from '../../types/user.type';

const UserMe = () => {
  const { data }:any = useGetData<IUser>({
    queryKey: ["user-data"],
    url: `/user`,
    options: { refetchOnWindowFocus: false, staleTime: Infinity },
  });
  console.log(data);
  
  return (
    <div>
<h2 className="text-[32px] font-bold mb-4">Account</h2>
<div className="account-info bg-white grid grid-cols-12 py-8 px-6 rounded-2xl gap-y-8 gap-x-2">
  <label htmlFor="" className="xl:col-span-11 col-span-10 max-h-[52px]">
   <span className="md:text-base text-sm opacity-75 text-[#121] "> Name</span>
    <h4 className="text-[#121] md:text-xl text-md font-bold mt-1">{data?.first_name}</h4>
  </label>
  <button className="xl:col-span-1 col-span-2 border-2 h-full rounded-[4px] flex items-center gap-x-1 justify-center max-h-[48px]" style={{border:"1px solid #8dd3bb" }}><EditIcon/> <span className="md:flex hidden">Change</span></button>
  <label htmlFor="" className="xl:col-span-9 md:col-span-7 col-span-8 max-h-[52px]">
   <span className="md:text-base text-sm opacity-75 text-[#121] "> Email</span>
    <h4 className="text-[#121] md:text-xl text-md font-bold mt-1">{data?.email}</h4>
  </label>
<button className="xl:col-span-2 md:col-span-3 col-span-2 border-2 h-full rounded-[4px] flex items-center gap-x-1 justify-center max-h-[48px]" style={{border:"1px solid #8dd3bb" }}><AiFillPlusCircle/> <span className="md:flex hidden">Add another email</span></button>
<button className="xl:col-span-1 col-span-2 border-2 h-full rounded-[4px] flex items-center gap-x-1 justify-center max-h-[48px]" style={{border:"1px solid #8dd3bb" }}><EditIcon/> <span className="md:flex hidden">Change</span></button>
<label htmlFor="" className="max-h-[52px] xl:col-span-11 col-span-10 ">
   <span className="md:text-base text-sm opacity-75 text-[#121]  leading-normal">Password</span>
    <h4 className="text-[#121] md:text-xl text-md font-bold mt-1 ">************</h4>
  </label>
  <button className="xl:col-span-1 col-span-2 border-2 h-full rounded-[4px] max-h-[48px] flex items-center gap-x-1 justify-center" style={{border:"1px solid #8dd3bb" }}><EditIcon/> <span className="md:flex hidden">Change</span></button>
<label htmlFor="" className="max-h-[52px] xl:col-span-11 col-span-10 ">
   <span className="md:text-base text-sm opacity-75 text-[#121]  leading-normal">Phone number</span>
    <h4 className="text-[#121] md:text-xl text-md font-bold mt-1 ">{data?.phone}</h4>
  </label>
  <button className="xl:col-span-1 col-span-2 border-2 h-full rounded-[4px] max-h-[48px] flex items-center gap-x-1 justify-center" style={{border:"1px solid #8dd3bb" }}><EditIcon/> <span className="md:flex hidden">Change</span></button>
<label htmlFor="" className="max-h-[52px] xl:col-span-11 col-span-10 ">
   <span className="md:text-base text-sm opacity-75 text-[#121]  leading-normal">Address</span>
    <h4 className="text-[#121] md:text-xl text-md font-bold mt-1">{data?.address ? data?.address:"Tashkent"}</h4>
  </label>
  <button className="xl:col-span-1 col-span-2 border-2 h-full rounded-[4px] max-h-[48px] flex items-center gap-x-1 justify-center" style={{border:"1px solid #8dd3bb" }}><EditIcon/> <span className="md:flex hidden">Change</span></button>
<label htmlFor="" className="max-h-[52px] xl:col-span-11 col-span-10 ">
   <span className="md:text-base text-sm opacity-75 text-[#121]  leading-normal">Date of birth</span>
    <h4 className="text-[#121] md:text-xl text-md font-bold mt-1 ">{data?.birth ?? "01.02.2023"}</h4>
  </label>
  <button className="xl:col-span-1 col-span-2 border-2 h-full rounded-[4px] max-h-[48px] flex items-center gap-x-1 justify-center" style={{border:"1px solid #8dd3bb" }}><EditIcon/> <span className="md:flex hidden">Change</span></button>
</div>
    </div>
  )
}

export default UserMe
