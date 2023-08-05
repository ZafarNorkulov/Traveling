import { Button } from "antd";
import React from "react";
import mapPhoto from "../../public/images/map.png"
import Image from "next/image";
const Map = () => {
  return (
    <div className="map mt-[120px]">
      <div className="myContainer flex sm:flex-row flex-col justify-between items-start sm:items-center">
        <div className="sm:text-start sm:mx-0 text-center mx-auto">
          <h2 className="component-title">Let is go places together</h2>
          <p className="component-desc mt-4 mb-6">
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
        <Button size={"large"} className="see-btn" >See All</Button>
      </div>
      <Image src={mapPhoto} className="component-photo" alt=""/>
    </div>
  );
};

export default Map;
