import Image from 'next/image'
import React from 'react'
import photo from "../../../public/images/cvk.png"
import { Divider } from 'antd'
import {IoCalendar, IoTime}from "react-icons/io5"
import { BsDoorClosedFill } from 'react-icons/bs'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'

const StayCard = () => {
  return (
    <div className='mt-4 flex lg:flex-row flex-col  items-center justify-between bg-white rounded-xl shadow-md gap-y-4 px-6 py-8'>
      <div className="card-left lg:w-auto w-full flex md:flex-row flex-col gap-x-8 md:gap-y-0 gap-y-4">
        <Image className='md:max-w-[80px] my-auto w-full md:h-[80px] object-fill p-[8px] md:border rounded-lg border-[#8dd3bb]' src={photo} alt='' />
        <div className="flex md:flex-row flex-col w-full items-center md:gap-x-6 md:gap-y-0 gap-y-2">
           <div className="flex  gap-x-4 w-full">
           <div className="flex flex-col md:gap-y-2 gap-y-1">
                <span className='opacity-75 text-[#121] md:text-base text-sm'>Check-In</span>
                <h4 className='md:text-xl text-md font-semibold'>Thur, Dec 8</h4>
            </div>
           <Divider className='min-w-[20px] max-w-[20px] h-[2px] bg-black'/>
            <div className="flex flex-col md:gap-y-2 gap-y-1">
                <span className='opacity-75 text-[#121] md:text-base text-sm'>Check-In</span>
                <h4 className='md:text-xl text-md font-semibold'>Fri, Dec 9</h4>
            </div>
           </div>
            <Divider type='vertical' className='h-[60%]'/>
            <div className="grid grid-cols-12 gap-y-2 md:w-auto w-full gap-x-6">
                <div className="col-span-6 flex items-center gap-x-2">
                    <div className='md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]'>
                     <IoTime fill='#8dd3bb' className='md:text-[22px] text-lg'/>
                    </div>
                   <div className='flex flex-col'>
                   <span className='text-[#121] md:text-xs text-[11px] font-semibold opacity-75'>Check-In time</span>
                    <h5 className='text-[#121] md:text-base text-sm font-medium'>12:00pm</h5>
                   </div>
                </div>
                <div className="col-span-6 flex items-center gap-x-2">
                    <div className='md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]'>
                     <BsDoorClosedFill fill='#8dd3bb' className='md:text-[22px] text-lg'/>
                    </div>
                   <div className='flex flex-col'>
                   <span className='text-[#121] md:text-xs text-[11px] font-semibold opacity-75'>Room no.</span>
                    <h5 className='text-[#121] md:text-base text-sm font-medium'>On arrival</h5>
                   </div>
                </div>
                <div className="col-span-6 flex items-center gap-x-2">
                    <div className='md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]'>
                     <IoTime fill='#8dd3bb' className='md:text-[22px] text-lg'/>
                    </div>
                   <div className='flex flex-col'>
                   <span className='text-[#121] md:text-xs text-[11px] font-semibold opacity-75'>Check-In out</span>
                    <h5 className='text-[#121] md:text-base text-sm font-medium'>11:30am</h5>
                   </div>
                </div>
               
                
            </div>
        </div>
      </div>
      <div className=" md:w-auto w-full flex items-center md:gap-x-4 gap-x-2 lg:justify-end justify-center">
          <button className="text-sm md:w-auto w-[85%] h-full font-medium text-[#121] py-2 px-4 bg-[#8dd3bb] rounded-[4px]">
            Download Ticket
          </button>
          <button className="md:w-auto w-[15%] border-[#8dd3bb] h-full  py-2 rounded-[4px] border-[1px] md:px-2 flex justify-center duration-200 hover:bg-[#d6efe6ab]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 3.5L10.5 8L6 12.5"
                stroke="#4C4850"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default StayCard
