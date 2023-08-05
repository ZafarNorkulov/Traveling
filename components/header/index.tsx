import React, { useState } from "react";
import { GiSofa } from "react-icons/gi";
import AirplaneIcon from "../helperComponents/AirplaneIcon";
import { Layout, Menu, MenuProps, theme,Button } from "antd";
import Link from "next/link";
import { GreenLogo } from "../logo";

const CHeader = () => {
  const { Header } = Layout;


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
   <div className="header">
     <Layout className="shadow-md">
     <Header
        style={{
          background: colorBgContainer,
        }}
      >
      

       <div className="flex items-center justify-between ">
       <Menu theme="light" mode="horizontal" className="md:flex hidden"  defaultActiveFirst={true} items={[
            {label: <div className="flex items-center gap-1"><AirplaneIcon/> Find Flight</div>,key:"1"},
            {label: <div className="flex items-center gap-1"><GiSofa style={{ fontSize:"20.5px" }} /> Find Stays</div>,key:"2"},
            ]}/>
           <GreenLogo/>
            <div>
                <button className="login-btn"><Link href={"/auth/login"}>Login</Link></button>
                <button className="sign-btn"><Link href={"/auth/register"}>Sign up</Link></button>
            </div>
       </div>
         
      </Header>
    </Layout>
   </div>
  );
};

export default CHeader;
