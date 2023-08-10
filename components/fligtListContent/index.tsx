import { Button, Checkbox, Collapse, Divider, Select, Slider } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Emirates from "../../public/images/emirates.png";
import { AiOutlineHeart } from "react-icons/ai";
const FlightListContent = () => {
  const { Panel } = Collapse;

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
          <span><FiMenu /></span>
          <span className="sm:text-base text-sm">Other Sort</span>
        </div>
      ),
      desc: "",
      active: false,
    },
  ]);

  const handleClick = (index: number, status: boolean) => {
    const checkstatus_elements = [...byPrice];
    checkstatus_elements.forEach((item) => {
      item.active = false;
      if (status === true) {
        checkstatus_elements[index].active = status;
      } else {
        checkstatus_elements[index].active = !status;
      }
      setByPrice([...checkstatus_elements]);
    });
  };

  return (
    <div className="myContainer mt-16 grid grid-cols-12 mb-[254px] lg:gap-4 gap-3">
      <div className="filter lg:col-span-4 md:col-span-3 col-span-12 lg:gap-2 flex w-full md:bg-inherit bg-white p-6 rounded-xl md:shadow-none shadow">
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
        <div className="race-content flex md:flex-row flex-col gap-x-6 lg:justify-between bg-white shadow-lg rounded-xl px-6  items-center">
          <>{byPrice?.map((item, index) =>
            item?.active ? (
              <div className="relative " key={item?.index}>
                <div className={`flex py-6 border-b-4 border-[#8dd3bb] m-0`}>
                  <div
                    className={`pl-2 cursor-pointer xl:w-[190px] lg:w-[150px] w-full h-[52px] justify-center flex flex-col gap-2 `}
                    onClick={() => handleClick(index, false)}
                  >
                    <h5 className="sm:text-base text-sm font-semibold whitespace-nowrap">
                      {item?.title}
                    </h5>
                    <p className="opacity-40 text-sm md:whitespace-normal whitespace-nowrap">{item?.desc}</p>
                  </div>
                  {index !== 3 ? (
                    <Divider type="vertical" className={`w-px h-auto lg:block hidden m-0 `} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              <div className="relative" key={item?.index}>
                <div className={`flex py-6 price-line border-b-4 border-transparent m-0`}>
                <div
                  className={`pl-2 cursor-pointer  xl:w-[190px] lg:w-[150px]  w-full h-[52px] justify-center flex flex-col gap-2 `}
                  onClick={() => handleClick(index, true)}
                >
                  <h5 className="sm:text-base text-sm font-semibold whitespace-nowrap">
                      {item?.title}
                    </h5>
                    <p className="opacity-40 text-sm md:whitespace-normal whitespace-nowrap">{item?.desc}</p>
                </div>
                {index !== 3 ? (
                  <Divider type="vertical" className="w-px h-auto lg:block hidden lg:m-0" />
                ) : (
                  ""
                )}
              </div>
              </div>
            )
          )}
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
          <div className="col-span-12 race-card bg-white rounded-xl p-6 flex lg:flex-row flex-col gap-6 mt-6 relative">
            <div>
              <Image src={Emirates} className="card-img" alt="" />
            </div>
            <div className="absolute top-6 right-6 lg:flex flex-col  hidden">
              <span className=" text-xs font-medium opacity-75">
                starting from
              </span>
              <h2 className=" text-2xl font-bold text-[#FF8682] text-end">
                $104
              </h2>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 md:h-auto h-[30%]">
                  <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                    4.2
                  </span>
                  <h4 className="text-xs font-bold">Very Good</h4>{" "}
                  <p className="text-xs font-medium">54 views</p>
                </div>
                <div className="lg:hidden ">
                  <span className=" text-xs font-medium opacity-75">
                    starting from
                  </span>
                  <h2 className=" text-2xl font-bold text-[#FF8682] text-end">
                    $104
                  </h2>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row justify-between">
                <div className="flex sm:items-center gap-4">
                  <Checkbox className="ml-1 md:mt-0 mt-10 h-max" />
                  <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-base font-semibold">
                        12:00PM - 01:28PM
                      </h3>{" "}
                      <p className="text-sm font-normal opacity-40">Emirates</p>
                    </div>
                    <span className="text-base font-semibold opacity-80">
                      non stop
                    </span>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-base font-semibold opacity-80">
                        2h 28m
                      </span>
                      <p className="text-sm font-normal opacity-40">EWR-BNA</p>
                    </div>
                  </div>
                </div>
                <Divider className="sm:hidden block h-auto" type="vertical" />
                <div className="flex sm:items-center gap-4">
                  <Checkbox className="ml-1 md:mt-0 mt-10 h-max" />
                  <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-base font-semibold">
                        12:00PM - 01:28PM
                      </h3>{" "}
                      <p className="text-sm font-normal opacity-40">Emirates</p>
                    </div>
                    <span className="text-base font-semibold opacity-80">
                      non stop
                    </span>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-base font-semibold opacity-80">
                        2h 28m
                      </span>
                      <p className="text-sm font-normal opacity-40">EWR-BNA</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="my-4" />
              <div className="flex gap-4">
                <div className="py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB]">
                  <AiOutlineHeart className="text-xl mt-[2px]" />
                </div>
                <button className="w-full rounded-[4px] text-base font-semibold py-3 main-btn">
                  View Deals
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 race-card bg-white rounded-xl p-6 flex lg:flex-row flex-col gap-6 mt-6 relative">
            <div>
              <Image src={Emirates} className="card-img" alt="" />
            </div>
            <div className="absolute top-6 right-6 lg:flex flex-col  hidden">
              <span className=" text-xs font-medium opacity-75">
                starting from
              </span>
              <h2 className=" text-2xl font-bold text-[#FF8682] text-end">
                $104
              </h2>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 md:h-auto h-[30%]">
                  <span className="px-2 py-1 border-[1px] rounded border-[#8DD3BB]">
                    4.2
                  </span>
                  <h4 className="text-xs font-bold">Very Good</h4>{" "}
                  <p className="text-xs font-medium">54 views</p>
                </div>
                <div className="lg:hidden ">
                  <span className=" text-xs font-medium opacity-75">
                    starting from
                  </span>
                  <h2 className=" text-2xl font-bold text-[#FF8682] text-end">
                    $104
                  </h2>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row justify-between">
                <div className="flex sm:items-center gap-4">
                  <Checkbox className="ml-1 md:mt-0 mt-10 h-max" />
                  <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-base font-semibold">
                        12:00PM - 01:28PM
                      </h3>{" "}
                      <p className="text-sm font-normal opacity-40">Emirates</p>
                    </div>
                    <span className="text-base font-semibold opacity-80">
                      non stop
                    </span>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-base font-semibold opacity-80">
                        2h 28m
                      </span>
                      <p className="text-sm font-normal opacity-40">EWR-BNA</p>
                    </div>
                  </div>
                </div>
                <Divider className="sm:hidden block h-auto" type="vertical" />
                <div className="flex sm:items-center gap-4">
                  <Checkbox className="ml-1 md:mt-0 mt-10 h-max" />
                  <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-base font-semibold">
                        12:00PM - 01:28PM
                      </h3>{" "}
                      <p className="text-sm font-normal opacity-40">Emirates</p>
                    </div>
                    <span className="text-base font-semibold opacity-80">
                      non stop
                    </span>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-base font-semibold opacity-80">
                        2h 28m
                      </span>
                      <p className="text-sm font-normal opacity-40">EWR-BNA</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="my-4" />
              <div className="flex gap-4">
                <div className="py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB]">
                  <AiOutlineHeart className="text-xl mt-[2px]" />
                </div>
                <button className="w-full rounded-[4px] text-base font-semibold py-3 main-btn">
                  View Deals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightListContent;
