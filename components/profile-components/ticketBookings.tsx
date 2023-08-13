import { Divider, Select } from "antd";
import React, { useEffect, useState } from "react";
import AirplaneIcon from "../helperComponents/AirplaneIcon";
import { GiSofa } from "react-icons/gi";
import FLightCard from "./flight-card";
import StayCard from "./stay-card";

const TicketBookings = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState([
    {
      title: (
        <>
          <AirplaneIcon /> Flight List
        </>
      ),
      active: true,
    },
    {
      title: (
        <>
          <GiSofa style={{ fontSize: "20.5px" }} /> Stays
        </>
      ),
      active: false,
    },
  ]);
  const handleClick = (index: number, status: boolean) => {
    selectedTab?.map((item) => {
      item.active = false;
      if (status === true) {
        selectedTab[index].active = true;
      } else {
        selectedTab[index].active = false;
      }
    });
    setSelectedTab([...selectedTab]);
    setActiveTab(index);
    localStorage.setItem("activeTicketTabIndex", String(index));
  };
  useEffect(() => {
    setActiveTab(Number(localStorage.getItem("activeTicketTabIndex")) ?? 0);
  }, []);
  return (
    <div>
      <div className="flex items-end justify-between">
        <h2 className="md:text-[32px] text-2xl font-bold mb-4">Tickets/Bookings</h2>
        <Select defaultValue={"1"} bordered={false}>
          <Select.Option value={"1"}>Upcoming</Select.Option>
        </Select>
      </div>
      <div className="flex justify-between relative bg-white md:py-6 md:px-6 py-3 px-3 rounded-xl shadow-md gap-x-6">
        {selectedTab?.map((item, index) =>
          index !== 1 ? (
            <div
              className="w-[49%] flex cursor-pointer items-center gap-x-2 py-[6px]"
              onClick={() => handleClick(index, false)}
              key={index}
            >
              {item?.title}
            </div>
          ) : (
            <>
              <Divider type="vertical" className=" mx-auto h-auto" />
              <div
                className="w-[49%] flex cursor-pointer items-center gap-x-2 py-[6px]"
                onClick={() => handleClick(index, false)}
              >
                {item?.title}
              </div>
            </>
          )
        )}
        <div
          className={`absolute bottom-0 h-1 duration-300 ease-in rounded sm:w-[47%] w-[44%] bg-[#CDEAE1] ${
            activeTab ? "sm:left-[51%] left-[54%]" : "sm:left-4 left-2"
          }`}
        ></div>
      </div>
      {
        activeTab ? (
          <>
          <StayCard/>
          <StayCard/>
          <StayCard/>
          </>
        ):(

          <>
          <FLightCard/>
          <FLightCard/>
          <FLightCard/>
          </>
        )
      }
    </div>
  );
};

export default TicketBookings;
