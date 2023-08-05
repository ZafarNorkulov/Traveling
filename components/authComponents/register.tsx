import { Button, Carousel, Checkbox, Form, Input, Switch, message } from "antd";
import React, { useEffect, useState } from "react";
import instance from "../../configs/axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import imageAuth from "../../public/images/Group 4.png"
import Image from "next/image";
import FieldSetComponent from "../filedSet";
import Link from "next/link";
import Google from "../../public/images/google.png"
import FaceBook from "../../public/images/facebook.png"
import Apple from "../../public/images/apple.png"
import { GreenLogo } from "../logo";

const RegisterComponent = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    is_active: true,
    is_superuser: false,
  });
  const onFinish = async (data: any) => {
    console.log(data)
    try {
      await instance({
        url: "/user",
        method: "POST",
        data: data,
      });
    } catch (error:any) {
      message.error(error?.response?.data?.detail || "Error")
    }
  };


  return (
    <div className="authContainer">
      <div className="grid grid-cols-12 gap-[104px]">
        <div className="col-span-12 lg:col-span-5 lg:block hidden">
          <Carousel autoplay>
        <Image className="auth-image" src={imageAuth}  priority={true} alt="" />
          </Carousel>
        </div>
        <div className="col-span-12 lg:col-span-7">
       <GreenLogo/>
          <h3>Sign Up</h3>
          <span className="auth-desc">
            Let’s get you all st up so you can access your personal account.
          </span>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="mt-5 w-full gap-y-3"
            size="large"
          >
            <div className="flex flex-col md:flex-row gap-3 mb-2">
              <FieldSetComponent
                className="w-full field_set_box"
                title={"First Name"}
              >
                <Input
                  value={user?.first_name}
                  onChange={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                />
              </FieldSetComponent>
              <FieldSetComponent
                className="w-full field_set_box"
                title="Last Name"
              >
                <Input
                  value={user?.last_name}
                  onChange={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                />
              </FieldSetComponent>
             
            </div>
            <div className="d-flex flex-col md:flex-row gap-3 mb-2">
              <FieldSetComponent
              title="Email"
              className="w-full"
              >
                <Input
                type="email"
                placeholder="example@gmail.com"
                  value={user?.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </FieldSetComponent>
              <FieldSetComponent
              title="Phone Number"
                className="w-full"
              
              >
                <Input
                  value={user?.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </FieldSetComponent>
            </div>
            <FieldSetComponent title={"Password"} className="mb-2">
            <Input.Password
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
            </FieldSetComponent>
            
        <FieldSetComponent title={"Confirm Password"} className="mb-2">
            <Input.Password
            value={user?.confirm_password}
            onChange={(e) => setUser({ ...user, confirm_password: e.target.value })}
        placeholder="input password"
      />
        </FieldSetComponent>
        <Checkbox className="mb-4 text-sm" >I agree to all the <span className="myred-color">Terms</span> and <span className="myred-color">Privacy Policies</span></Checkbox>
            
            <button className="w-full px-3 py-3 rounded mygreen-bgColor auth-btn"  type="submit">Create account</button>
          </Form>
          <div className="text-center mt-4">
                <span className="already-text">Already have an account? <Link href="/auth/login" className="myred-color"> Login</Link></span>
                <div className="flex items-center" style={{margin: "40px 0"}}>
                    <hr className="w-full " />
                    <span className="px-3 or-elements" >Or Sign up with</span>
                    <hr className="w-full" />
                </div>
                <div className="flex gap-3">
                    <span className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]"><Image src={FaceBook} width={24} height={24} alt=""/></span>
                    <span className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]"><Image src={Google} width={24} height={24} alt=""/></span>
                    <span className="w-full py-3 px-4 rounded border-[1px] border-solid border-[#8DD3BB]"><Image src={Apple} width={24} height={24} alt=""/></span>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
