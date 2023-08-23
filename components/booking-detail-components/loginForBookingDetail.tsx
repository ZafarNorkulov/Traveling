import React from "react";
import { Form, Input } from "antd";
import Image from "next/image";
import FaceBook from "../../public/images/facebook.png"
import Google from "../../public/images/google.png"
import Apple from "../../public/images/apple.png"
import { IoMail } from "react-icons/io5";


const LoginForBookingDetail = () => {
  const [form] = Form.useForm();
  return (
    <div className="login-booking p-6 bg-white rounded-xl flex flex-col gap-4">
      <h4 className="text-xl font-bold">Login or Sign up to book</h4>
      <Form form={form} size="large" className="flex flex-col gap-4">
        <Form.Item name={"phone_number"}>
          <Input placeholder="Phone Number" required className="py-[15px]" />
        </Form.Item>
        <p className="text-sm">
          We&apos;ll call or text you to confirm your number. Standard message
          and data rates apply.{" "}
          <span className="font-medium">Privacy Policy</span>
        </p>
        <Form.Item>
          <button className="p-2 py-[13px] w-full font-medium text-base bg-[#8dd3bb] rounded-[4px]">
            Continue
          </button>
        </Form.Item>
      </Form>
      <div
              className="flex items-center "
            >
              <hr className="w-full" />
              <span className="px-3 whitespace-nowrap">Or login with</span>
              <hr className="w-full" />
            </div>
            <div className="flex gap-3">
              <span
                className="w-full py-[15px] px-4 rounded border-[1px] border-solid border-[#8DD3BB] cursor-pointer"
              >
                <Image src={FaceBook} className="mx-auto" width={24} height={24} alt="" />
              </span>
              <span
                className="w-full py-[15px] px-4 rounded border-[1px] border-solid border-[#8DD3BB] cursor-pointer"
              >
                <Image src={Google} className="mx-auto" width={24} height={24} alt="" />
              </span>
              <span
                className="w-full py-[15px] px-4 rounded border-[1px] border-solid border-[#8DD3BB] cursor-pointer"
              >
                <Image src={Apple} className="mx-auto" width={24} height={24} alt="" />
              </span>
            </div>
            <span
                className="w-full flex items-center gap-4 font-medium justify-center  py-[15px] px-4 rounded border-[1px] border-solid border-[#8DD3BB] cursor-pointer"
              >
                <IoMail size={24}/>Continue with email
              </span>
    </div>
  );
};

export default LoginForBookingDetail;
