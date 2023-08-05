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
    <div className="myContainer mt-16 grid grid-cols-12 mb-[254px] gap-4">
      <div className="filter col-span-4 flex gap-6 w-full">
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
        <Divider type="vertical" className="h-full" />
      </div>
      <div className="col-span-8">
        <div className="grid grid-cols-12 bg-white shadow-lg rounded-xl py-4 px-6 gap-6 items-center">
          <div className="col-span-3 cursor-pointer flex flex-col gap-2 border-r-[1px] ">
            <h5 className="text-base font-semibold">Cheapest</h5>
            <p className="opacity-40 text-sm">$99. 2h 18m</p>
          </div>
          <div className="col-span-3 cursor-pointer flex flex-col gap-2 border-r-[1px] ">
            <h5 className="text-base font-semibold">Best</h5>
            <p className="opacity-40 text-sm">$99. 2h 18m</p>
          </div>
          <div className="col-span-3 cursor-pointer flex flex-col gap-2 border-r-[1px] ">
            <h5 className="text-base font-semibold">Quickest</h5>
            <p className="opacity-40 text-sm">$99. 2h 18m</p>
          </div>
          <div className="col-span-3 cursor-pointer flex flex-row items-center gap-2 font-medium ">
            <FiMenu />
            <span>Other Sort</span>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-6">
          <div className="col-span-3">
            <h6>
              Showing 4 of <span className="text-[#FF8682]">257 places</span>
            </h6>
          </div>
          <div className="col-span-3 col-start-10 flex items-center pl-4">
            <span className="whitespace-nowrap text-sm">Sort by</span>
            <Select bordered={false} className="w-full" defaultValue={"1"}>
              <Select.Option key={"1"}>Recomended</Select.Option>
            </Select>
          </div>
          <div className="col-span-12 race-card bg-white rounded-xl p-6 flex gap-6 mt-6 relative">
        <div className=" ">
        <Image src={Emirates} alt=""/>
        </div>
            <div>
            <div className="flex items-center gap-2">
            <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">4.2</span>
            <h4 className="text-xs font-bold">Very Good</h4> <p className="text-xs font-medium">54 views</p>
            </div>
            <div className="absolute top-6 right-6">
              <span className=" text-xs font-medium opacity-75">starting from</span>
              <h2 className="text-2xl font-bold text-[#FF8682] text-end">$104</h2>
            </div>
            <Checkbox className="ml-1">
              <div className="flex gap-[40px] mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
            </Checkbox>
            <Checkbox className="ml-1 mt-4">
              <div className="flex gap-[40px] mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
            </Checkbox>
            <Divider className="my-4"/>
            <div className="flex gap-4">

            <div className="py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB]">
              <AiOutlineHeart className="text-xl mt-[2px]"/>
            </div>
            <button className="w-full rounded-[4px] text-base font-semibold py-3 main-btn">View Deals</button>
            </div>
            </div>
          </div>
          <div className="col-span-12 race-card bg-white rounded-xl p-6 flex gap-6 mt-6 relative">
        <div className=" ">
        <Image src={Emirates} alt=""/>
        </div>
            <div>
            <div className="flex items-center gap-2">
            <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">4.2</span>
            <h4 className="text-xs font-bold">Very Good</h4> <p className="text-xs font-medium">54 views</p>
            </div>
            <div className="absolute top-6 right-6">
              <span className=" text-xs font-medium opacity-75">starting from</span>
              <h2 className="text-2xl font-bold text-[#FF8682] text-end">$104</h2>
            </div>
            <Checkbox className="ml-1">
              <div className="flex gap-[40px] mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
            </Checkbox>
            <Checkbox className="ml-1 mt-4">
              <div className="flex gap-[40px] mt-6">
              <div className="flex flex-col gap-y-1"><h3 className="text-base font-semibold">12:00PM - 01:28PM</h3> <p className="text-sm font-normal opacity-40">Emirates</p></div>
              <span className="text-base font-semibold opacity-80">non stop</span>
              <div className="flex flex-col gap-y-1">
              <span className="text-base font-semibold opacity-80">2h 28m</span>
              <p className="text-sm font-normal opacity-40">EWR-BNA</p>
              </div>
              </div>
            </Checkbox>
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
