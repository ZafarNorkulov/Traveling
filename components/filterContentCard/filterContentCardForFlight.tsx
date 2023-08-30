import Image from 'next/image'
import React, { useState } from 'react'
import EvolutionCard from '../helperComponents/evolutionCard'
import { Checkbox, Divider } from 'antd'
import { AiFillHeart } from 'react-icons/ai'
import {AiOutlineHeart} from "react-icons/ai"
import Link from 'next/link'

const FilterContentCardForFlight = ({data,className}:{data?:any,className:string}) => {
  const [flightData,setFlightData] = useState(data)
  const toggleLike = (index:number) => {
    const updatedFlightData = [...flightData];
    updatedFlightData[index].isLiked = !updatedFlightData[index].isLiked;
    setFlightData(updatedFlightData);
  };
  return (
  
     flightData && flightData?.map((item:any,index:number)=>(
        <div className={`bg-white rounded-xl p-6 flex lg:flex-row flex-col gap-6 mt-6 relative ${className}`} key={index}>
              <div>
                <Image src={item?.photo} className="card-img" alt="" />
              </div>
              <div className="absolute top-6 right-6 lg:flex flex-col  hidden">
                <span className=" text-xs font-medium opacity-75">
                  starting from
                </span>
                <h2 className="flex items-baseline text-2xl font-bold text-[#FF8682] text-end">
                  ${item?.price} {item?.morning ? "" :(<span className='text-sm text-[#FF8682]'>/night</span>)}
                </h2>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 md:h-auto h-[30%]">
                    <EvolutionCard>
                     {item?.evolution}
                    </EvolutionCard>
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
                <div className="flex sm:flex-col flex-row justify-between">
                  {
                    item?.race_times.map((times:any,i:number) => (

                  <div className="flex sm:items-center gap-4" key={i}>
                    <Checkbox className="ml-1 md:mt-0 mt-10 h-max" />
                    <div className="flex sm:flex-row flex-col md:gap-[40px] gap-5 mt-6">
                      <div className="flex flex-col gap-y-1">
                        <h3 className="text-base font-semibold uppercase">
                          {times?.start_time} - {times?.end_time}
                        </h3>{" "}
                        <p className="text-sm font-normal opacity-40">{times?.start_city}</p>
                      </div>
                      <span className="text-base font-semibold opacity-80">
                        {times?.type}
                      </span>
                      <div className="flex flex-col gap-y-1">
                        <span className="text-base font-semibold opacity-80">
                         {times?.flight_time}
                        </span>
                        <p className="text-sm font-normal opacity-40">{times?.reach_city}</p>
                      </div>
                    </div>
                  </div>
                    ))
                  }
                  {/* <Divider className="sm:hidden block h-auto" type="vertical" /> */}
            
                </div>
                <Divider className="my-4" />
                <div className="flex gap-4 cursor-pointer">
                {
                  item?.isLiked ? (
                    <div
                    className={`py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB] `}
                    onClick={() => toggleLike(index)}
                  >
                   
                      <AiFillHeart className="text-xl mt-[2px] fill-[#555] cursor-pointer" />
                     
                  </div>
                  ):(
                    <div
                    className={`py-3 px-4 border-[1px] rounded-[4px] border-[#8DD3BB]  cursor-pointer`}
                    onClick={() => toggleLike(index)}
                  >

                     <AiOutlineHeart className="text-xl mt-[2px]" />
                  </div>
                  )
                }
                    <Link href={"/flight/flight-detail"} className="w-full text-[#121] bg-[#8dd3bb] rounded-[4px]">
                  <button className="w-full rounded-[4px] text-base font-semibold py-3">
                    View Deals
                  </button>
                    </Link>
                </div>
              </div>
      </div>
      ))

  )
}

export default FilterContentCardForFlight
