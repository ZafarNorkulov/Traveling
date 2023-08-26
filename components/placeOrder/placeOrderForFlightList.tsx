import React from 'react'
import FieldSetComponent from '../filedSet'
import { Button, DatePicker, Select } from 'antd'
import { ImSearch } from 'react-icons/im'

const PlaceOrderForFlightList = () => {
  const {RangePicker} = DatePicker;

  const Swap = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
  <path d="M14.583 2.25L19.833 7.5L14.583 12.75M19.03 7.5H4.83301M10.083 21.75L4.83301 16.5L10.083 11.25M5.67676 16.5H19.833" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )

  return (
    <div className="fly">
      <div className="grid grid-cols-12 relative gap-x-4 gap-y-8 bg-white py-8 px-6 mx-auto z-10 rounded-2xl shadow-lg ">
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="From - To"
        >
          <Select defaultValue={"la-ka"} bordered={false} suffixIcon={<Swap/>}>
            <Select.Option value="la-ka">Lahore - Karachi</Select.Option>
          </Select>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-2 sm:col-span-6 col-span-12"
          title="Trip"
        >
          <Select defaultValue={"return"} bordered={false}>
            <Select.Option value="return">Return</Select.Option>
          </Select>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Depart- Return"
        >
          <RangePicker showTime={{ format: "HH:mm" }} format="MM-DD HH:mm" bordered={false} suffixIcon="" />
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Passenger - Class"
        >
          <Select defaultValue={"economy"} bordered={false} suffixIcon="">
            <Select.Option value="economy">1 Passenger, Economy</Select.Option>
          </Select>
        </FieldSetComponent>
        <div className='lg:col-span-1 col-span-12 flex justify-center items-center'>
          
       <Button className="w-full lg:h-[87%] h-full lg:mt-[6px] flex lg:py-1 py-4 justify-center items-center"><ImSearch className='text-2xl'/></Button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrderForFlightList
