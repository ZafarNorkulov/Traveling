import Image from "next/image";
import React, { useState } from "react";
import EvolutionCard from "../helperComponents/evolutionCard";
import { Checkbox, Divider } from "antd";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import Stars from "../stars";
import { RiCupFill } from "react-icons/ri";
import {AiOutlineHeart} from "react-icons/ai";


const FilterContentCardForHotel = ({
  data,
  className,
}: {
  data?: any;
  className: string;
}) => {

  
  const [hotelData,setHotelData] = useState(data)
  const toggleLike = (index:number) => {
    const updatedHotelData = [...hotelData];
    updatedHotelData[index].isLiked = !updatedHotelData[index].isLiked;
    setHotelData(updatedHotelData);
  };

  return (
    data &&
    data?.map((item: any, index: number) => (
      <div
        className={`bg-white rounded-xl p-6 flex lg:flex-row flex-col gap-6 mt-6 relative ${className}`}
        key={index}
      >
        <div>
          {/* <Image
            src={item?.image}
            className="card-img lg:rounded-none rounded-xl h-[75%]"
            alt=""
          /> */}
        </div>
        <div className="absolute top-6 right-6 lg:flex flex-col  hidden">
          <span className=" text-xs font-medium opacity-75">starting from</span>
          <h2 className="flex items-baseline text-2xl font-bold text-[#FF8682] text-end">
            ${item?.starting_from}{" "}
            {item?.morning ? (
              ""
            ) : (
              <span className="text-sm text-[#FF8682]">/night</span>
            )}
          </h2>
        </div>
        <div className="w-full flex flex-col gap-3 h-[75%]">
          <h2 className="xl:w-[65%] w-[75%] text-xl font-TradeGothic font-semibold pr-6 mb-1">
            {item?.name}
          </h2>
          <div className="flex items-center gap-1">
            <IoLocation />
            <span className="text-xs">{item?.address}</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              {" "}
              <Stars rating={item?.sum_rating} fill="#FF8682" />
              <p className="text-xs">{Number(item?.sum_rating.toString().slice(0,3)) } Star Hotel</p>
            </div>
            <div className="flex items-center gap-1">
              <RiCupFill />
              <p className="text-xs font-medium font-Montserrat">
                <span className="font-bold">{item?.aminities}+</span> Aminities
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 md:h-auto h-[30%]">
              <EvolutionCard>{Number(item?.sum_rating.toString().slice(0,3))}</EvolutionCard>
              <h4 className="text-xs font-bold">Very Good</h4>{" "}
              <p className="text-xs font-medium">{item?.viewer} views</p>
            </div>
            <div className="lg:hidden ">
              <span className=" text-xs font-medium opacity-75">
                starting from
              </span>
              <h2 className=" text-2xl font-bold text-[#FF8682] text-end">
                ${item?.price}
              </h2>
            </div>
          </div>
          <Divider className="my-4" />
          <div className="flex gap-4">
          {
                  item?.isLiked ? (
                    <div
                    className={`py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB] hover:bg-[#e2f8f3df] transition-all duration-200 ease-linear`}
                    onClick={() => toggleLike(index)}
                  >
                   
                      <AiFillHeart className="text-xl mt-[2px] fill-[#555] " />
                     
                  </div>
                  ):(
                    <div
                    className={`py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB] hover:bg-[#CDEAE1] transition-all duration-200 ease-linear cursor-pointer`}
                    onClick={() => toggleLike(index)}
                  >

                     <AiOutlineHeart className="text-xl mt-[2px]" />
                  </div>
                  )
                }
            <Link
              href={"/hotel-detail"}
              className="w-full text-[#121] bg-[#8dd3bb] rounded-[4px]"
            >
              <button className="w-full rounded-[4px] text-base font-semibold py-3">
                View Deals
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))
  );
};

export default FilterContentCardForHotel;
