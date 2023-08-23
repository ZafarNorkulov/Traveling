import Image from 'next/image'
import React, { useState } from 'react'
import visa from "../../public/images/visa-black.png"
import { PiPlusCircleThin } from 'react-icons/pi'
import AddCardModal from '../addCardModal'


const AddCardForBookingDetail = () => {
  const [openModalStatus,setOpenModalStatus] = useState(false)
  const [cards,setCards] = useState([
    {
      card_number: "1234567890124321",
      exp_date:"02/27",
      status:true,
    },
    {
      card_number: "1234567890123456",
      exp_date:"02/27",
      status:false,
    },
  ])

  const handleActive = (index:number,status:boolean)=>{
    const check_elements = [...cards]
    check_elements.forEach((item)=>{
      item.status = false
    })
    if(status === true){
      check_elements[index].status = status
    }else{
      check_elements[index].status=!status
    }
    setCards([...check_elements])
  
  }

  return (
    <div className='flex flex-col p-4 bg-white shadow-md rounded-xl gap-4'>
      {cards.map((item,index)=>(
        item.status ? (
          <div className='flex justify-between items-center p-4 bg-[#8dd3bb] rounded-xl cursor-pointer' key={index} onClick={()=>handleActive(index,false)}>
            <div className='flex items-center gap-2 max-w-[90%]'>
              <Image src={visa} className='object-cover' alt=''/>
            <h4 className='text-base font-bold'>**** {item?.card_number.slice(-4)}</h4>
              <p className='text-sm'>{item?.exp_date}</p>
            </div>
            <div className='w-5 h-5 border-2 border-white flex items-center justify-center rounded-full'>
            <span className='w-[10px] h-[10px] bg-white rounded-full'></span>
            </div>
            </div>
        ):(
          <div className='flex justify-between items-center p-4  rounded-xl cursor-pointer' key={index} onClick={()=>handleActive(index,false)}>
            <div className='flex items-center gap-2 max-w-[90%]'>
              <Image src={visa} className='object-cover' alt=''/>
            <h4 className='text-base font-bold'>**** {item?.card_number.slice(-4)}</h4>
              <p className='text-sm'>{item?.exp_date}</p>
            </div>
            <div className='w-5 h-5 border-2 border-black flex items-center justify-center rounded-full'>
            </div>
            </div>
        )
      ))}
       <div className="lg:col-span-4 cursor-pointer sm:col-span-6 col-span-10 border-dashed hover:bg-[#effdf9ad] border-2 h-[212px] rounded-2xl border- border-[#8dd3bb] flex flex-col justify-center items-center" onClick={()=>setOpenModalStatus(true)}>
          <PiPlusCircleThin className="text-[64px] fill-[#8dd3bb]" />
          <span className="mt-[10px] opacity-75 text-[#121] text-xs">
            Add a new card
          </span>
        </div>
        <AddCardModal modalStatus={openModalStatus} setOpenModalStatus={setOpenModalStatus}/>
    </div>
  )
}

export default AddCardForBookingDetail
