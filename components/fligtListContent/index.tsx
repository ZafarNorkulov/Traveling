import {  Select } from "antd";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MainFilter from "../main-filter";
import FilterContentCardForFlight from "../filterContentCard/filterContentCardForFlight";
import Emirates from "../../public/images/emirates.png";
import Dubai from "../../public/images/dubai.png";
import Qatar from "../../public/images/qatar.png";
import Etihad from "../../public/images/etihad.png";
import SortByPrice from "../sortByName/sortByNameforFlightList";

const FlightListContent = () => {
  const [byPrice, setByPrice] = useState([
    {
      title: "Cheapest",
      desc: "$99. 2h 18m",
      active: true,
    },
    {
      title: "Best",
      desc: "$99. 2h 18m",
      active: false,
    },
    {
      title: "Quickest",
      desc: "$99. 2h 18m",
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
  

  const [data, setData] = useState([
    {
      photo: Emirates,
      price: 104,
      evolution: 4.2,
      morning: true,
      viewer: 54,
      race_times: [
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
      ],
    },
    {
      photo: Dubai,
      price: 104,
      evolution: 4.2,
      morning: true,
      viewer: 54,
      race_times: [
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
      ],
    },
    {
      photo: Qatar,
      price: 104,
      evolution: 4.2,
      morning: false,
      viewer: 54,
      race_times: [
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
      ],
    },
    {
      photo: Etihad,
      price: 104,
      evolution: 4.2,
      morning: false,
      viewer: 54,
      race_times: [
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
        {
          start_time: "12:00pm",
          end_time: "02:28pm",
          type: "non stop",
          flight_time: "2h 28m",
          start_city: "Emirates",
          reach_city: "EWR-BNA",
        },
      ],
    },
  ]);

  return (
    <div className="grid grid-cols-12 mt-16 lg:gap-4 gap-3">
      <MainFilter className="lg:col-span-4 md:col-span-3 col-span-12" />
      <div className="race-card lg:col-span-8 md:col-span-9 col-span-12">
        <SortByPrice data={byPrice} setData={setByPrice}/>
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

          <FilterContentCardForFlight data={data} className="col-span-12 race-card" />
          <button className='col-span-12 mt-8 text-white text-sm font-semibold bg-[#121] h-12 py-2 px-4  rounded-[4px]'>Show more results</button>
        </div>
      </div>
    </div>
  );
};

export default FlightListContent;
