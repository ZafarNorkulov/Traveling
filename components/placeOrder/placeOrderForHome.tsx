import React, { useEffect, useState } from "react";
import FieldSetComponent from "../filedSet";
import { Button, DatePicker, Divider, Select } from "antd";
import { BsSendFill } from "react-icons/bs";
import Link from "next/link";
import AirplaneIcon from "../helperComponents/AirplaneIcon";
import SofaIcon from "../helperComponents/SofaIcon";

const PlaceOrderForHome = () => {
  const { RangePicker } = DatePicker;
  const Swap = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M14.583 2.25L19.833 7.5L14.583 12.75M19.03 7.5H4.83301M10.083 21.75L4.83301 16.5L10.083 11.25M5.67676 16.5H19.833"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const [menu, setMenu] = useState([
    {
      label: "Flight",
      icon: <AirplaneIcon />,
      url: "/",
      active: true,
    },
    {
      label: "Stays",
      icon: <SofaIcon fill={"#121"} />,
      url: "/hotel",
      active: false,
    },
  ]);
  useEffect(() => {
    setActiveMenu(Number(localStorage.getItem("activeMenu")) ?? 0);
  }, []);
  const handleActiveMenu = (index: number, status: boolean) => {
    menu?.forEach((element) => {
      element.active = false;
      if (status === true) {
        menu[index].active = status;
      } else {
        menu[index].active = !status;
      }
    });
    setMenu([...menu]);
    setActiveMenu(index);
    localStorage.setItem("activeMenu", String(index));
  };

  return (
    <div className="myContainer fly">
      <div className="grid grid-cols-12  relative gap-x-4 gap-y-8 bg-white py-8 px-6 mx-auto z-10 rounded-2xl shadow-md my-[-5%]">
        <div className="md:col-span-3 lg:col-span-4 sm:col-span-6 col-span-10  relative flex ">
          <div className="grid grid-cols-12 gap-2">
          {menu?.map((item, index) =>
            item.active ? (
              <div
                className="col-span-5 flex items-center gap-8 cursor-pointer text-[#121]"
                key={index}
                onClick={() => handleActiveMenu(index, false)}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {item?.icon}
                  {item?.label}
                </div>
                {index == 0 && <Divider type="vertical" className="col-span-2 h-full " />}
              </div>
            ) : (
              <div
                className="col-span-5 flex items-center gap-8 cursor-pointer text-[#121]"
                key={index}
                onClick={() => handleActiveMenu(index, true)}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {item?.icon}
                  {item?.label}
                </div>
                {index == 0 && <Divider type="vertical" className="col-span-2 h-full " />}
              </div>
            )
          )}
          </div>
          <hr
            className={`absolute -bottom-2 w-[100px] duration-200 ease-linear h-1 m-0 bg-[#8dd3bb] ${
              activeMenu === 0 ? "left-0" : "2xl:left-[34%] xl:left-[34%] sm:left-[38%] left-[38%]"
            }`}
          />
        </div>
        <div className="md:col-span-9 lg:col-span-8 col-span-6    "></div>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="From - To"
        >
          <Select defaultValue={"la-ka"} bordered={false} suffixIcon={<Swap />}>
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
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MM-DD HH:mm"
            bordered={false}
            suffixIcon=""
          />
        </FieldSetComponent>
        <FieldSetComponent
          className="lg:col-span-3 sm:col-span-6 col-span-12"
          title="Passenger - Class"
        >
          <Select defaultValue={"economy"} bordered={false} suffixIcon="">
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
