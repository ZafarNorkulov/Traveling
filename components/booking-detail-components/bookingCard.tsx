import React from 'react'
import racePhoto from "../../public/images/flight-detail-hero.png"
import Image from 'next/image'

import { Divider } from 'antd'
import EvolutionCard from '../helperComponents/evolutionCard'
const BookingCard = () => {
  return (
    <div className='p-6 bg-white rounded-xl shadow-md'>
     <div className="bilet-heead flex lg:flex-row flex-col lg:items-center gap-6">
     <Image src={racePhoto} className='xl:w-[120px] xl:h-[120px] lg:w-[90px] lg:h-[90px] w-full object-fill rounded-xl' alt=""/>
      <div className="flex flex-col gap-y-5">
     <div className="flex flex-col gap-y-1">
     <span className="flight-type opacity-75 text-[#121]">Economy </span>
      <h4 className="flight-airplan font-bold">Emirates A380 Airbus</h4>
     </div>
     <div className="flex items-center gap-x-2 ">
     <EvolutionCard>4.2</EvolutionCard>
      <p className='text-xs font-medium'><span className='font-bold'>Very Good</span> 54 reviews</p>
     </div>
      </div>
     </div>
     <Divider/>
     <p className='text-base font-medium'>Your booking is protected by <span className='font-bold'>golobe</span></p>
     <Divider/>
     <div className="flex flex-col gap-y-4">
     <h4 className='text-base font-bold'>Price Details</h4>
      <div className='flex justify-between items-center'>
        <span className='text-[#121] text-base font-medium'>Base Fare </span>
        <h5 className='text-[#121] font-semibold'>$400</h5>
      </div>
      <div className='flex justify-between items-center'>
        <span className='text-[#121] text-base font-medium'>Discount </span>
        <h5 className='text-[#121] font-semibold'>$400</h5>
      </div>
      <div className='flex justify-between items-center'>
        <span className='text-[#121] text-base font-medium'>Taxes</span>
        <h5 className='text-[#121] font-semibold'>$400</h5>
      </div>
      <div className='flex justify-between items-center'>
        <span className='text-[#121] text-base font-medium'>Service Fee</span>
        <h5 className='text-[#121] font-semibold'>$400</h5>
      </div>
     </div>
     <Divider/>
     <div className='flex justify-between items-center'>
     <span className='text-[#121] text-base font-medium'>Total</span>
     <h5 className='text-[#121] font-semibold'>$1600</h5>
     </div>
    </div>
  )
}

export default BookingCard
