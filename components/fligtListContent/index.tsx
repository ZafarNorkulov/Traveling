import { Button, Checkbox, Collapse, Divider, Select, Slider } from "antd";
import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Emirates from "../../public/images/emirates.png"
import { AiOutlineHeart } from "react-icons/ai";
const FlightListContent = () => {
  const { Panel } = Collapse;
  
  return (
    <div className="myContainer mt-16 grid grid-cols-12 mb-[254px] lg:gap-4 gap-3">
      <div className="filter lg:col-span-4 md:col-span-3 col-span-12 lg:gap-2 flex w-full md:bg-inherit bg-white p-6 rounded-xl shadow">
        <div className="w-full">
          <h4 className="mb-8 text-xl">Filters</h4>

          <Collapse
            ghost
            expandIconPosition={"end"}
            className="w-full"
            expandIcon={({ isActive }) => (
              <MdOutlineKeyboardArrowUp
                className={`text-3xl duration-150 ease-out ${
                  !isActive ? "rotate-180" : ""
                }`}
                style={{ fontSize: "25px" }}
              />
            )}
          >
            <Panel header={<h5>Price</h5>} key={"1"}>
              <Slider range min={50} max={1200} defaultValue={[50, 1200]} />
              <div className="flex justify-between">
                <span>50$</span>
                <span>1200$</span>
              </div>
            </Panel>
            <Panel header={<h5>Departure Time</h5>} key={"2"}>
              <Slider range defaultValue={[20, 50]} />
              <div className="flex justify-between">
                <span>12:01AM</span>
                <span>11:56PM</span>
              </div>
            </Panel>
            <Panel header={<h5>Departure Time</h5>} key={"3"}>
              <div className="flex gap-4 ">
                <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                  0+
                </span>
                <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                  1+
                </span>
                <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                  2+
                </span>
                <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                  3+
                </span>
                <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                  4+
                </span>
              </div>
            </Panel>
            <Panel header={<h5>Airlines</h5>} key={"4"}>
              <div className="flex flex-col gap-3">
                <Checkbox>Emirated</Checkbox>
                <Checkbox>Fly Dubai</Checkbox>
                <Checkbox>Qatar</Checkbox>
                <Checkbox>Etihad</Checkbox>
              </div>
            </Panel>
            <Panel header={<h5>Trips</h5>} key={"5"}>
              <div className="flex flex-col gap-3">
                <Checkbox>Round trip</Checkbox>
                <Checkbox>On Way</Checkbox>
                <Checkbox>Multi-City</Checkbox>
                <Checkbox>My Dates Are Flexible</Checkbox>
              </div>
            </Panel>
          </Collapse>
        </div>
        <Divider type="vertical" className="md:flex hidden h-full m-0" />
      </div>
      <div className="race-card lg:col-span-8 md:col-span-9 col-span-12">
        <div className="grid grid-cols-12 bg-white shadow-lg rounded-xl py-4 px-6 gap-6  items-center">
          <div className="sm:col-span-3 col-span-6 cursor-pointer flex flex-col gap-2  border-r-[1px] ">
            <h5 className="sm:text-base text-sm font-semibold">Cheapest</h5>
            <p className="opacity-40 text-sm">$99. 2h 18m</p>
          </div>
          <div className="sm:col-span-3 col-span-6 cursor-pointer flex flex-col gap-2  md:border-r-[1px] ">
            <h5 className="sm:text-base text-sm font-semibold">Best</h5>
            <p className="opacity-40 text-sm">$99. 2h 18m</p>
          </div>
          <div className="sm:col-span-3 col-span-6 cursor-pointer flex flex-col gap-2  border-r-[1px] ">
            <h5 className="sm:text-base text-sm font-semibold">Quickest</h5>
            <p className="opacity-40 text-sm">$99. 2h 18m</p>
          </div>
          <div className="sm:col-span-3 col-span-6 cursor-pointer flex flex-row items-center gap-2  font-medium ">
            <FiMenu />
            <span className="sm:text-base text-sm">Other Sort</span>
          </div>
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
          <div className="col-span-12 race-card bg-white rounded-xl p-6 flex lg:flex-row flex-col gap-6 mt-6 relative">
        <div >
        <Image src={Emirates} className="card-img" alt=""/>
        </div>
        <div className="absolute top-6 right-6 md:block hidden ">
              <span className=" text-xs font-medium opacity-75">starting from</span>
              <h2 className="text-2xl font-bold text-[#FF8682] text-end">$104</h2>
            </div>
            <div>
           
            <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 md:h-auto h-[30%]">
            <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">4.2</span>
            <h4 className="text-xs font-bold">Very Good</h4> <p className="text-xs font-medium">54 views</p>
            </div>
            <div className=" ">
              <span className=" text-xs font-medium opacity-75">starting from</span>
              <h2 className="text-2xl font-bold text-[#FF8682] text-end">$104</h2>
            </div>
            </div>
           <div className="flex sm:flex-col flex-row justify-between">
           <div className="flex sm:items-center gap-4">
           <Checkbox className="ml-1 md:mt-0 mt-10 h-max"/>
            <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
           </div> 
           <Divider className="sm:hidden block h-auto" type="vertical"/>
           <div className="flex sm:items-center gap-4">
           <Checkbox className="ml-1 md:mt-0 mt-10 h-max"/>
            <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
           </div> 
           </div>
            <Divider className="my-4"/>
            <div className="flex gap-4">

            <div className="py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB]">
              <AiOutlineHeart className="text-xl mt-[2px]"/>
            </div>
            <button className="w-full rounded-[4px] text-base font-semibold py-3 main-btn">View Deals</button>
            </div>
            </div>
          </div>
          <div className="col-span-12 race-card bg-white rounded-xl p-6 flex lg:flex-row flex-col gap-6 mt-6 relative">
        <div >
        <Image src={Emirates} className="card-img" alt=""/>
        </div>
        <div className="absolute top-6 right-6 md:block hidden ">
              <span className=" text-xs font-medium opacity-75">starting from</span>
              <h2 className="text-2xl font-bold text-[#FF8682] text-end">$104</h2>
            </div>
            <div>
           
            <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 md:h-auto h-[30%]">
            <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">4.2</span>
            <h4 className="text-xs font-bold">Very Good</h4> <p className="text-xs font-medium">54 views</p>
            </div>
            <div className=" ">
              <span className=" text-xs font-medium opacity-75">starting from</span>
              <h2 className="text-2xl font-bold text-[#FF8682] text-end">$104</h2>
            </div>
            </div>
           <div className="flex sm:flex-col flex-row justify-between">
           <div className="flex sm:items-center gap-4">
           <Checkbox className="ml-1 md:mt-0 mt-10 h-max"/>
            <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
           </div> 
           <Divider className="sm:hidden block h-auto" type="vertical"/>
           <div className="flex sm:items-center gap-4">
           <Checkbox className="ml-1 md:mt-0 mt-10 h-max"/>
            <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
           </div> 
           </div>
            <Divider className="my-4"/>
            <div className="flex gap-4">

            <div className="py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB]">
              <AiOutlineHeart className="text-xl mt-[2px]"/>
            </div>
            <button className="w-full rounded-[4px] text-base font-semibold py-3 main-btn">View Deals</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightListContent;
