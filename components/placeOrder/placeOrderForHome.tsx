import React from "react";
import FieldSetComponent from "../filedSet";
import { Button, DatePicker, Select } from "antd";
import { BsSendFill } from "react-icons/bs";
import Link from "next/link";

const PlaceOrderForHome = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="myContainer fly">
      <div className="grid grid-cols-12  relative gap-x-4 gap-y-8 bg-white py-8 px-6 mx-auto z-10 rounded-2xl shadow-md my-[-5%]">
        <h2 className="fly-title col-span-12">Where are you flying? </h2>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="From - To"
        >
          <Select defaultValue={"la-ka"} bordered={false}>
            <Select.Option value="la-ka">Lahore - Karachi</Select.Option>
          </Select>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
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
          <RangePicker showTime={{ format: "HH:mm" }} format="MM-DD HH:mm" bordered={false}/>
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Passenger - Class"
        >
          <Select defaultValue={"economy"} bordered={false}>
            <Select.Option value="economy">1 Passenger, Economy</Select.Option>
          </Select>
        </FieldSetComponent>
        <div className="lg:col-span-8 sm:col-span-5 sm:block hidden"></div>
        <div className="lg:col-span-4 sm:col-span-7 col-span-12 text-end flex items-center justify-end gap-3">
          <span>+ Add Promo Code</span>
            <Link href={"/flight-list"}>
          <Button size="large" className="flex items-center gap-1">
            <BsSendFill /> Show Filghts
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderForHome;
