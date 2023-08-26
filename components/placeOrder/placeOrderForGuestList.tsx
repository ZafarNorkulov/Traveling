import React from "react";
import FieldSetComponent from "../filedSet";
import { Button, DatePicker, Select } from "antd";
import { BsSendFill } from "react-icons/bs";
import Link from "next/link";
import { IoCalendar } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { GiSofa } from "react-icons/gi";

const PlaceOrderForGuestList = () => {
  
  return (
    <div className="myContainer fly">
      <div className="grid grid-cols-12 mt-12 relative gap-x-4 gap-y-8 bg-white py-8 px-6 mx-auto z-10 rounded-2xl shadow-md ">
        <h2 className="fly-title col-span-12">Where are you flying? </h2>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Enter Destination"
        >
          <Select defaultValue={"1"} bordered={false} suffixIcon={<GiSofa style={{ fontSize: 20 }} />}>
            <Select.Option value="1">Istanbul,Turkey</Select.Option>
          </Select>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Check In"
        >
         <DatePicker suffixIcon={<IoCalendar size={20}/>} format="DD MMM YYYY" showNow bordered={false}/>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Check out"
        >
          <DatePicker suffixIcon={<IoCalendar size={20}/>} format="DD MMM YYYY" bordered={false}/>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-2 sm:col-span-6 col-span-12"
          title="Passenger - Class"
        >
          <Select defaultValue={"economy"} bordered={false} suffixIcon={<BiSolidUser size={20}/>}>
            <Select.Option value="economy">1 Passenger, Economy</Select.Option>
          </Select>
        </FieldSetComponent>
        <div className='lg:col-span-1 col-span-12 flex justify-center items-center'>
          
          <Button className="w-full lg:h-[87%] h-full lg:mt-[6px] flex lg:py-1 py-4 justify-center items-center"><ImSearch className='text-2xl'/></Button>
           </div>
      </div>
    </div>
  );
};

export default PlaceOrderForGuestList;
