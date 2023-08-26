import { Divider } from "antd";
import React, { Dispatch, useEffect, useState } from "react";

const SortByNameForHotelList = ({ data,setData }: { data: any,setData:Dispatch<any> }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleClick = (index: number, status: boolean) => {
    const checkstatus_elements = [...data];
    checkstatus_elements.forEach((item) => {
      item.active = false;
      if (status === true) {
        checkstatus_elements[index].active = status;
      } else {
        checkstatus_elements[index].active = !status;
      }
      setActiveTab(index);
      localStorage.setItem("hotelSortName", String(index));
      setData([...checkstatus_elements]);
    });
  };

  useEffect(() => {
    setActiveTab(Number(localStorage.getItem("hotelSortName")) ?? 0);
  }, []);
  return (
    <div className="race-content relative w-full grid grid-cols-12 gap-x-6 lg:justify-between bg-white shadow-lg rounded-xl px-6 py-4 items-center gap-y-4">
      <>
        {data?.map((item: any, index: number) =>
          item?.active ? (
            <div
              className="relative sm:col-span-4 col-span-12 flex flex-row justify-between cursor-pointer"
              key={index}
              onClick={() => handleClick(index, false)}
            >
              <div className="flex flex-col gap-y-2">
                <h4 className="text-base font-semibold text-[#121] ">
                  {item?.title}
                </h4>
                <p className="text-sm opacity-40">{item?.desc}</p>
              </div>
              {index !== 2 && (
                <Divider type="vertical" className="h-auto sm:block hidden" />
              )}
            </div>
          ) : (
            <div
              className="relative sm:col-span-4 col-span-12 flex flex-row justify-between cursor-pointer"
              key={index}
              onClick={() => handleClick(index, false)}
            >
              <div className="flex flex-col gap-y-2">
                <h4 className="text-base font-semibold text-[#121] ">
                  {item?.title}
                </h4>
                <p className="text-sm opacity-40">{item?.desc}</p>
              </div>
              {index !== 2 && (
                <Divider type="vertical" className="h-auto sm:block hidden" />
              )}
            </div>
          )
        )}

        <span
          className={`hidden sm:block w-[19%] h-1 absolute bottom-0 duration-200 ease-linear bg-[#8dd3bb] ${
            activeTab === 0
              ? "left-[2.7%]"
              : activeTab === 1
              ? "left-[35%]"
              : "left-[67.4%]"
          } `}
        />
      </>
    </div>
  );
};

export default SortByNameForHotelList;
