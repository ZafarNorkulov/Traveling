import React from 'react'
import FieldSetComponent from '../filedSet'
import { Button, DatePicker, Select } from 'antd'
import { ImSearch } from 'react-icons/im'

const PlaceOrderForFlightList = () => {
  const {RangePicker} = DatePicker
  return (
    <div className="myContainer fly mt-12">
      <div className="grid grid-cols-12 relative gap-x-4 gap-y-8 bg-white py-8 px-6 mx-auto z-10 rounded-2xl shadow-lg ">
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="From - To"
        >
          <Select defaultValue={"la-ka"} >
            <Select.Option value="la-ka">Lahore - Karachi</Select.Option>
          </Select>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-2 sm:col-span-6 col-span-12"
          title="Trip"
        >
          <Select defaultValue={"return"}>
            <Select.Option value="return">Return</Select.Option>
          </Select>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Depart- Return"
        >
          <RangePicker showTime={{ format: "HH:mm" }} format="MM-DD HH:mm" />
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Passenger - Class"
        >
          <Select defaultValue={"economy"}>
            <Select.Option value="economy">1 Passenger, Economy</Select.Option>
          </Select>
        </FieldSetComponent>
        <div className='lg:col-span-1 col-span-12 flex justify-center items-center'>
          
       <Button className=" w-full lg:h-[87%] h-full lg:mt-[6px] flex lg:py-1 py-4 justify-center items-center"><ImSearch className='text-2xl'/></Button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrderForFlightList
