import React from "react";
import emirates from "../../public/images/emirates.png";
import Image from "next/image";
import AirplaneIcon from "../helperComponents/AirplaneIcon";
import { Divider } from "antd";
import { IoFastFood, IoWifi } from "react-icons/io5";
import { RiTimerFill } from "react-icons/ri";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Link from "next/link";


const FlightDetailsCard = ({data,href}:{data:any,href?:string}) => {
  return (
    <Link href={href ? `${href}`:""} className="flight-detail-card mt-10">
      {data?.map((item :any,index:number) =>(

      <ul className="py-8 px-6 rounded-xl self-stretch flex flex-col bg-white shadow-md mt-10" key={index}>
        {/* !TODO: backend'dan keladigan ma'lumotga'ga qarab tekshirish kerak! */}
        {item?.airplane_name &&
        (
        <li className="flex justify-between mb-6">
          <h5 className="md:text-2xl text-xl font-bold">{item?.race_name}</h5>
          <h3 className="md:text-[32px] text-2xl text-[#FF8682] font-bold ">${item?.price}</h3>
        </li>

        )}

        <li className="flex justify-between ">
          <h5 className="md:text-xl text-lg font-semibold">{item?.return_day}</h5>
          <p className="md:text-xl text-lg font-medium opacity-75">{item?.flight_time}</p>
        </li>
        <li className="flex md:flex-row flex-col-reverse md:items-center items-baseline md:justify-between mt-6">
          <div className="flex gap-6 border border-[#8dd3bb] rounded-xl md:py-4 md:px-8 py-3 px-4 ">
            <Image src={item?.cityPhoto[0].file_path}  className="max-h-12 max-w-[64px]" alt="" />
            <div className="flex flex-col gap-2">
              <h5 className="md:text-2xl text-lg font-semibold">{item?.city_name}</h5>
              <p className="text-sm font-medium">{item?.airplane_name}</p>
            </div>
          </div>
          <div className="flex py-4 px-6 md:gap-x-6 gap-x-3 items-center md:h-[80px] h-[60px] ml-auto">
            <span>
              {" "}
              <AirplaneIcon className="md:text-2xl text-lg " />
            </span>
            <Divider type="vertical" className="h-full m-0" />
            <span>
              {" "}
              <IoWifi className="md:text-2xl text-lg" />
            </span>
            <Divider type="vertical" className="h-full m-0" />
            <span>
              <RiTimerFill className="md:text-2xl text-lg " />
            </span>
            <Divider type="vertical" className="h-full m-0" />
            <span>
              <IoFastFood className="md:text-2xl text-lg " />
            </span>
            <Divider type="vertical" className="h-full m-0" />
            <span>
              <MdAirlineSeatReclineNormal className="md:text-2xl text-lg " />
            </span>
          </div>
        </li>
        <li className="flex mt-10 md:mx-auto">
          <ul className="flex flex-row md:gap-x-[80px] sm:gap-10 gap-5">
            <li className="flex md:flex-row flex-col md:gap-4 gap-2 items-center">
              <h3 className="lg:text-2xl text-lg font-semibold text-[#121]">{item?.start_time}</h3>
              <p className="lg:text-base text-[13px] text-[#121] opacity-60 font-medium">
                {item?.start_city}
              </p>
            </li>
            <li className="flex lg:gap-6 gap-3 items-center " >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={39}
                height="6"
                viewBox="0 0 39 6"
                fill="none"
              
              >
                <path
                  d="M5.66667 3C5.66667 1.52724 4.47276 0.333335 3 0.333335C1.52724 0.333335 0.333336 1.52724 0.333336 3C0.333336 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3ZM39 2.5L3 2.5L3 3.5L39 3.5L39 2.5Z"
                  fill="black"
                />
              </svg>
              <AirplaneIcon  width={48 } height={ 48} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={39}
                height="6"
                viewBox="0 0 39 6"
                fill="none"
              >
                <path
                  d="M38.6667 3C38.6667 1.52724 37.4728 0.333333 36 0.333333C34.5272 0.333333 33.3333 1.52724 33.3333 3C33.3333 4.47276 34.5272 5.66667 36 5.66667C37.4728 5.66667 38.6667 4.47276 38.6667 3ZM36 2.5L-2.18557e-08 2.5L2.18557e-08 3.5L36 3.5L36 2.5Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="flex md:flex-row flex-col md:gap-4 gap-2 items-center ">
            <h3 className="lg:text-2xl text-lg font-semibold text-[#121]">{item?.reach_time}</h3>
              <p className="lg:text-base text-[13px] text-[#121] opacity-60 font-medium">
                {item?.reach_city}
              </p>
            </li>
          </ul>
        </li>
      </ul>
      ))}
    </Link>
  );
};

export default FlightDetailsCard;
