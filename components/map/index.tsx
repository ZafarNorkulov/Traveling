import { Button } from "antd";
import React from "react";
import mapPhoto from "../../public/images/map.png"
import Image from "next/image";
import ComponentsHead from "../helperComponents/componentsHead";
const Map = () => {
  return (
    <div className="map">
      <ComponentsHead title="Let's go places together" desc=" Discover the latest offers and news and start planning your next trip with us." btnText="See All"/>
      <Image src={mapPhoto} className="component-photo" alt=""/>
    </div>
  );
};

export default Map;
