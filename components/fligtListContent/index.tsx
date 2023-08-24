import {  Divider, Select } from "antd";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MainFilter from "../main-filter";
import FilterContentCard from "../filterContentCard";
import Emirates from "../../public/images/emirates.png"
import Dubai from "../../public/images/dubai.png"
import Qatar from "../../public/images/qatar.png"
import Etihad from "../../public/images/etihad.png"


const FlightListContent = () => {
  
  const [activeTab, setActiveTab] = useState<number>(0);
  const [byPrice, setByPrice] = useState([
    {
      title: "Cheapest",
      desc: "$99. 2h 18m",
      index: 1,
      active: true,
    },
    {
      title: "Best",
      desc: "$99. 2h 18m",
      index: 2,
      active: false,
    },
    {
      title: "Quickest",
      desc: "$99. 2h 18m",
      index: 3,
      active: false,
    },
    {
      title: (
        <div className="sm:col-span-3 col-span-6 cursor-pointer flex flex-row items-center gap-2  font-medium ">
          <span>
            <FiMenu />
          </span>
          <span className="sm:text-base text-sm">Other Sort</span>
        </div>
      ),
      desc: "",
      active: false,
    },
  ]);
  useEffect(() => {
    setActiveTab(Number(localStorage.getItem("byPriceIndex")) ?? 0);
  }, []);
  const handleClick = (index: number, status: boolean) => {
    const checkstatus_elements = [...byPrice];
    checkstatus_elements.forEach((item) => {
      item.active = false;
      if (status === true) {
        checkstatus_elements[index].active = status;
      } else {
        checkstatus_elements[index].active = !status;
      }
      setActiveTab(index);
      localStorage.setItem("byPriceIndex", String(index));
      setByPrice([...checkstatus_elements]);
    });
  };
  const [data,setData] = useState([
    {
      photo:Emirates,
      price: 104,
      star:4.2,
      morning: true,
      viewer:54,
      race_times:[
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
       
      ]
    },
    {
      photo:Dubai,
      price: 104,
      star:4.2,
      morning: true,
      viewer:54,
      race_times:[
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
       
      ]
    },
    {
      photo:Qatar,
      price: 104,
      star:4.2,
      morning: false,
      viewer:54,
      race_times:[
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
       
      ]
    },
    {
      photo:Etihad,
      price: 104,
      star:4.2,
      morning: false,
      viewer:54,
      race_times:[
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type:"non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA"
        },
       
      ]
    },
  ])

  return (
    <div className="myContainer mt-16 grid grid-cols-12 lg:gap-4 gap-3">
      <MainFilter className="lg:col-span-4 md:col-span-3 col-span-12"/>
      <div className="race-card lg:col-span-8 md:col-span-9 col-span-12">
        <div className="race-content relative w-full grid grid-cols-12 gap-x-6 lg:justify-between bg-white shadow-lg rounded-xl px-6 py-4 items-center gap-y-4">
          <>
            {byPrice?.map((item, index) =>
              item?.active ? (
                <div
                  className="relative sm:col-span-3 col-span-12 flex flex-row justify-between cursor-pointer"
                  key={index}
                  onClick={() => handleClick(index, false)}
                >
                  <div className="flex flex-col gap-y-2">
                    <h4 className="text-base font-semibold text-[#121] ">
                      {item?.title}
                    </h4>
                    <p className="text-sm opacity-40">{item?.desc}</p>
                  </div>
                  {index !== 3 && (
                    <Divider
                      type="vertical"
                      className="h-auto sm:block hidden"
                    />
                  )}
                </div>
              ) : (
                <div
                  className="relative sm:col-span-3 col-span-12 flex flex-row justify-between cursor-pointer"
                  key={index}
                  onClick={() => handleClick(index, false)}
                >
                  <div className="flex flex-col gap-y-2">
                    <h4 className="text-base font-semibold text-[#121] ">
                      {item?.title}
                    </h4>
                    <p className="text-sm opacity-40">{item?.desc}</p>
                  </div>
                  {index !== 3 && (
                    <Divider
                      type="vertical"
                      className="h-auto sm:block hidden"
                    />
                  )}
                </div>
              )
            )}

            <span
              className={`hidden sm:block w-[19%] h-1 absolute bottom-0 duration-200 ease-linear bg-[#8dd3bb] ${
                activeTab === 0
                  ? "left-[2.7%]"
                  : activeTab === 1
                  ? "left-[27%]"
                  : activeTab === 2
                  ? "left-[51.3%]"
                  : "left-[75.7%]"
              } `}
            />
          </>
        </div>
        <div className="grid grid-cols-12 mt-6">
          <div className="xl:col-span-3 sm:col-span-4 col-span-12 flex items-center justify-center">
            <h6 className="sm:text-base text-2xl">
              Showing 4 of <span className="text-[#FF8682]">257 places</span>
            </h6>
          </div>
          <div className="lg:col-span-3 sm:col-span-4 col-span-12 lg:col-start-10 sm:col-start-9  flex items-center justify-center pl-4">
            <span className="whitespace-nowrap text-sm">Sort by</span>
            <Select bordered={false} className="sm:w-full" defaultValue={"1"}>
              <Select.Option key={"1"}>Recomended</Select.Option>
            </Select>
          </div>
          
          
          <FilterContentCard data={data} className="col-span-12 race-card"/>
         
        </div>
      </div>
    </div>
  );
};

export default FlightListContent;
