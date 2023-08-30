import React, { useState } from 'react'
import MainFilter from '../main-filter'
import { Button, Select } from 'antd';
import FilterContentCardForHotel from '../filterContentCard/filterContentCardForHotel';
import SortByNameForHotelList from '../sortByName/sortByNameForHotelList';
import HotelPhotofirst from "../../public/images/HotelPhotofirst.png"
import HotelPhotosecond from "../../public/images/HotelPhotosecond.png"
import useGetData from '../../custom-hooks/getData';
import { IUser } from '../../types/user.type';

const HotelListContent = () => {

  const {data}:any = useGetData<IUser>({
    queryKey: ["hotel-list"],
    url: "/hotel/list"
  })
  console.log(data)
  const [contentData,setContentData]= useState([
    {
      name: "CVK Park Bosphorus Hotel Istanbul",
      photo: HotelPhotofirst,
      price: 104,
      location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      star: 5,
      morning: false,
      evolution: 4.2,
      aminities: 20,
      viewer: 371,
    },
    {
      name: "Eresin Hotels Sultanahmet - Boutique Class",
      photo: HotelPhotosecond,
      price: 104,
      location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
      star: 5,
      morning: false,
      evolution: 4.2,
      aminities: 20,
      viewer: 54,
    },
   
 
  ])

    const [sortByNameData, setSortByNameData] = useState([
        {
          title: "Hotels",
          desc: "257 places",
          active: true,
        },
        {
          title: "Motels",
          desc: "51 places",
          active: false,
        },
        {
          title: "Resorts",
          desc: "72 places",
          active: false,
        },
      ]);
  return (
    <div className='myContainer mt-16 grid grid-cols-12 lg:gap-4 gap-3'>
      <MainFilter className="lg:col-span-4 md:col-span-3 col-span-12"/>
      <div className="race-card lg:col-span-8 md:col-span-9 col-span-12">
        <SortByNameForHotelList data={sortByNameData} setData={setSortByNameData}/>
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

          <FilterContentCardForHotel data={data} className="col-span-12 race-card" />
          <button className='col-span-12 mt-8 text-white text-sm font-semibold bg-[#121] h-12 py-2 px-4  rounded-[4px]'>Show more results</button>
        </div>
      </div>
    </div>
  )
}

export default HotelListContent
