import React, { useState } from 'react'

const PayTypesForFlight = () => {
  const [datas,setDatas]= useState([
    {
      title: "Pay in full",
      desc: "Pay the total and you are all set",
      status: true,
    },
    {
      title: "Pay part now, part later",
      desc: "Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.",
      status: false,
    },
  ])
  const handleActive = (index:number,status:boolean)=>{
    const check_elements = [...datas]
    check_elements.forEach((item)=>{
      item.status = false
    })
    if(status === true){
      check_elements[index].status = status
    }else{
      check_elements[index].status=!status
    }
    setDatas([...check_elements])
  }


  return (
    <div className='p-4 grid bg-white shadow-md rounded-xl gap-4'>
        {datas?.map((item,index)=>(
          item?.status ? (
            <div className='flex justify-between items-center p-4 bg-[#8dd3bb] rounded-xl cursor-pointer' key={index} onClick={()=>handleActive(index,false)}>
            <div className='flex flex-col gap-2 max-w-[90%]'>
            <h4 className='text-base font-bold'>{item?.title}</h4>
              <p className='text-sm'>{item?.desc}</p>
            </div>
            <div className='w-5 h-5 border-2 border-white flex items-center justify-center rounded-full'>
            <span className='w-[10px] h-[10px] bg-white rounded-full'></span>
            </div>
            </div>
          ):(
            <div className='flex justify-between items-center p-4 rounded-xl cursor-pointer' key={index} onClick={()=>handleActive(index,true)}>
            <div className='flex flex-col gap-2 max-w-[90%]'>
            <h4 className='text-base font-bold'>{item?.title}</h4>
              <p className=' text-sm'>{item?.desc}</p>
            </div>
            <div className='w-5 h-5 border-2 border-black flex items-center justify-center rounded-full'>
            </div>
            </div>
          )
        ))}
        <span className='text-xs underline'>More info</span>
    </div>
  )
}

export default PayTypesForFlight
