import React from 'react'
import { IoLocation } from 'react-icons/io5'
import EvolutionCard from '../helperComponents/evolutionCard'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSolidShareAlt } from 'react-icons/bi'
import { Breadcrumb } from 'antd'
import FlightInfo from './flightInfo'

const TicketComponent = () => {
  return (
    <div>
         <Breadcrumb
        className="text-[#121] opacity-75"
        items={[
          { title: "Turkey" },
          { title: "Istanbul" },
          { title: "CVK Park Bosphorus Hotel Istanbul" },
        ]}
      />
      <div className="flex md:flex-row flex-col justify-between my-8 relative gap-6">
        <div className="flex flex-col gap-y-2">
          <h2 className="md:text-2xl text-lg text-[#121] font-bold ">
            Emirates A380 Airbus
          </h2>
          <div className="flex sm:items-center items-start md:mt-2 opacity-75]">
            <IoLocation />{" "}
            <span className="md:w-[100%] w-[100%] text-base opacity-75">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
          </div>
          <div className="flex items-center gap-x-2">
            <EvolutionCard>4.2</EvolutionCard>
            
            <p className=" text-xs font-medium"><span className="font-bold">Very Good </span> 54 reviews</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-end ">
          <h3 className="md:text-[32px] text-2xl font-bold md:static absolute top-0 right-0">$240</h3>
          <div className="flex gap-x-4 justify-end">
            <strong className="p-2 border border-[#8dd3bb] rounded-[4px]">
              <AiOutlineHeart className="text-xl" />
            </strong>
            <strong className="p-2 border border-[#8dd3bb] rounded-[4px]">
              <BiSolidShareAlt className="text-xl " />
            </strong>
            <button className="p-2 w-[150px] bg-[#8dd3bb] rounded-[4px]">
              Book now
            </button>
          </div>
        </div>
      </div>
      <FlightInfo/>
      <div className='flex flex-col gap-[34px] mt-14'>
      <h3 className='text-2xl font-semibold'>Terms and Conditions</h3>
      <div>
        <h4 className='text-xl font-semibold mb-4'>Payments</h4>
        <ul className='flex flex-col gap-4 list-disc pl-5'>
          <li className='text-sm'>
          If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. 
          </li>
          <li className='text-sm'>
          If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.
          </li>
          <li className='text-sm'>
          Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.
          </li>
        </ul>
      </div>
      <div>
      <h4 className='text-xl font-semibold mb-4'>Contact Us</h4>
      <p className='text-sm leading-5'>If you have any questions about our Website or our Terms of Use, please contact:</p>
      <p className='text-sm leading-5'>Golobe Group Q.C.S.C</p>
      <p className='text-sm leading-5'>Golobe Tower</p>
      <p className='text-sm leading-5'>P.O. Box: 22550</p>
      <p className='text-sm leading-5'>Doha, State of Qatar</p>
      <p className='text-sm leading-5'>Further contact details can be found at <span className='underline'>golobe.com/help</span></p>
      </div>

      </div>
    </div>
  )
}

export default TicketComponent
