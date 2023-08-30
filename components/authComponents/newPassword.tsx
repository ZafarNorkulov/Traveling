import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import imageAuth from "../../public/images/Group 4.png";
import Image from "next/image";
import instance from "../../configs/axios";
import FieldSetComponent from "../filedSet";
import { GreenLogo } from "../logo";
import { useRouter } from "next/router";

const NewPasswordComponent = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const localStorageEmail = localStorage.getItem("user_email");
    setUserEmail(localStorageEmail ?? "");
  }, []);

  const onFinish = async (data: {
    password: string;
    confirm_password: string;
  }) => {
  
      try {
        const newData = {
          new_password: {
            password: data.password,
            confirm_password: data.confirm_password,
          },
          email: userEmail,
        };
        let res = await instance({
          url: "/site/change_password",
          method: "POST",
          data: newData,
        });
        localStorage.removeItem("user_email")
        message.success(res?.data?.msg || "Password changed");
        router.push("/auth/login");
      } catch (error: any) {
        message.error(error.response.data.detail);
      }
    
  };

  return (
    <div className="authContainer">
      <div className="grid grid-cols-12 gap-[104px]">
        <div className="col-span-5 login-right">
          <GreenLogo />
          <h3 className="mt-[64px] text-[40px] font-bold text-black mb-4">
            Set a password
          </h3>
          <span className="auth-desc opacity-75 mt-4">
            Your previous password has been reseted. Please set a new password
            for your account.
          </span>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="mt-12 flex flex-col gap-6 "
          >
            <FieldSetComponent title="Create Password">
              <Form.Item name={"password"} className="m-0">
                <Input.Password
                  bordered={false}
                  placeholder="Create password..."
                />
              </Form.Item>
            </FieldSetComponent>
            <FieldSetComponent
              title="Re-enter Password"
              className="mt-2 h-[53px]"
            >
              <Form.Item
                name={"confirm_password"}
                dependencies={["password"]}
                className="m-0"
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  bordered={false}
                  placeholder="Repeat password"
                />
              </Form.Item>
            </FieldSetComponent>

            <button
              className="w-full mt-2 px-3 py-3 rounded bg-[#8dd3bb]"
              style={{ fontWeight: 500 }}
              type="submit"
            >
              Set password
            </button>
          </Form>
        </div>
        <div className="col-span-7 lg:block hidden">
          <Carousel autoplay>
            <Image className="auth-image" src={imageAuth} alt="" />
            <Image className="auth-image" src={imageAuth} alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordComponent;
