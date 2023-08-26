
import { useState } from "react";
import emirates from "../../public/images/emirates.png";
import { useAppSelector } from "../../redux/service";
import { Breadcrumb } from "antd";
import FlightDetailsCard from "../flight-detail/flightDetailsCard";
import AddCardForBookingDetail from "./addCardForBookingDetail";
import LoginForBookingDetail from "./loginForBookingDetail";
import BookingCard from "./bookingCard";
import PayTypesForFlight from "./payTypesForFlight"



const BookingDetailComponent = () => {
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
        },
      ],
      start_time: "12:00 pm",
      start_city: "Newark(EWR)",
      reach_time: "12:00 am",
      reach_city: "Newark(EWR)",
    },
  ]);
  const auth = useAppSelector((state) => state.auth);
  return (
    <div className="grid grid-cols-12 lg:gap-10 gap-5">
      <Breadcrumb
        className="text-[#121] opacity-75 col-span-12 mt-12 "
        items={[
          { title: "Turkey" },
          { title: "Istanbul" },
          { title: "CVK Park Bosphorus Hotel Istanbul" },
        ]}
      />
      <div className="xl:col-span-8 col-span-12 row-span-2 ">
        <div className="grid gird-cols-12 lg:gap-10 gap-5">
          <div className="col-span-12">
            <FlightDetailsCard data={data} />
          </div>
          <div className="col-span-12">
            <PayTypesForFlight />
          </div>
          {!auth?.isAuthenticated ? (
            <div className="col-span-12">
              <AddCardForBookingDetail />
            </div>
          ) : (
            <div className="col-span-12">
              <LoginForBookingDetail />
            </div>
          )}
        </div>
      </div>
      <div className="xl:col-span-4 col-span-12 row-span-6">
        <BookingCard />
      </div>
    </div>
  );
};

export default BookingDetailComponent;
