import Head from 'next/head'
import React, { useState } from 'react'
import userLayout from '../../layouts/userLayout'
import FlightDetailHero from '../../components/flight-detail/hero'
import FlightDetailsCard from '../../components/flight-detail/flightDetailsCard'
import BookingDetail from '../../components/flight-detail/bookingDetail'
import emirates from "../../public/images/emirates.png"
const FlightDetail = () => {
  const [data,setData] = useState([
    {
      race_name: "Emirates A380 Airbus",
      price: 240,
      return_day: "Return Wed, Dec 8",
      flight_time: "2h 28m",
      city_name: "Emirates",
      airplane_name: "Emirates A380 Airbus",
      cityPhoto: [
        {
          file_name: "emirates",
          file_path: emirates,
        }
      ],
      start_time:"12:00 pm",
      start_city: "Newark(EWR)",
      reach_time: "12:00 am",
      reach_city: "Newark(EWR)"
    }
  ])
  return (
    <div>
      <Head>
        <title>Traveling Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlightDetailHero/>
      <FlightDetailsCard data={data} href="/booking-detail"/>
      <BookingDetail />
    </div>
  )
}

export default FlightDetail
FlightDetail.layout = userLayout