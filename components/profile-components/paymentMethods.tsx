import React, {  useState } from "react";
import { PiPlusCircleThin } from "react-icons/pi";
import { IoTrashBin } from "react-icons/io5";
import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import FieldSetComponent from "../filedSet";

const PaymentMethods = () => {
  const [addCardModalStatus,setOpenModalStatus] = useState<boolean>(false);



  return (
    <div>
      <h2 className="text-[32px] font-bold mb-4">Payment methods</h2>
      <div className="grid grid-cols-12 bg-white rounded-3xl shadow-md p-6 gap-6 ">
        <div className="lg:col-span-4 sm:col-span-6 col-span-10 row-span-1 bg-[#8dd3bb] rounded-2xl p-4">
          <div className="flex flex-col gap-y-[57px]">
            <div className="flex justify-between gap-x-4">
              <div className="flex flex-col">
                <h5 className="text-2xl">**** **** ****</h5>
                <h4 className="text-[32px] font-semibold -my-[10px]">4321</h4>
              </div>
              <IoTrashBin className="text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex flex-col">
                <span>Valid Thru</span>
                <h5>02/27</h5>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="34"
                viewBox="0 0 52 34"
                fill="none"
              >
                <path
                  d="M2.29751 0.993103C1.15398 0.993103 0.226562 1.92026 0.226562 3.06405V31.436C0.226562 32.5797 1.15445 33.5069 2.29751 33.5069H49.9292C51.0727 33.5069 52.0001 32.5798 52.0001 31.436V3.06405C52.0001 1.92032 51.0723 0.993103 49.9292 0.993103H2.29751ZM31.1483 10.6828C32.4084 10.6828 33.4182 10.9612 34.0622 11.22L33.6221 13.9883L33.3309 13.841C32.731 13.5822 31.9605 13.3331 30.8975 13.3508C29.6252 13.3508 29.037 13.9184 29.037 14.4494C29.0296 15.0478 29.7243 15.4424 30.8603 16.0333C32.7354 16.9451 33.602 18.0505 33.5898 19.5038C33.5646 22.1555 31.3468 23.869 27.9303 23.869C26.4727 23.8529 25.0685 23.5443 24.3094 23.1878L24.7656 20.3273L25.1847 20.5312C26.2521 21.0081 26.9433 21.201 28.2441 21.201C29.1783 21.201 30.1809 20.8099 30.1889 19.9536C30.195 19.3944 29.7698 18.9958 28.5046 18.3696C27.2718 17.7585 25.6374 16.7348 25.6555 14.8992C25.6748 12.4161 27.9368 10.6828 31.1483 10.6828ZM4.80526 11.089H10.0522C10.7588 11.1157 11.3292 11.3432 11.5261 12.1099L12.6571 17.9473C12.6572 17.9479 12.6569 17.95 12.6571 17.9506L12.9968 19.6996L16.1825 11.089H19.6287L14.5063 23.6926L11.0634 23.6958L8.32266 13.5255C9.95342 14.3895 11.3418 15.3891 12.1458 16.7646C11.9385 16.3294 11.6654 15.838 11.3158 15.3538C10.9088 14.7899 10.0297 14.0618 9.6623 13.752C8.38194 12.6727 6.64312 11.801 4.76483 11.3397L4.80526 11.089ZM20.9991 11.1035H24.3693L22.261 23.6877H18.8909L20.9991 11.1035ZM40.034 11.1035H42.5871L45.2599 23.6877H42.1955C42.1955 23.6877 41.8915 22.242 41.7927 21.8012C41.311 21.8012 37.9424 21.7964 37.5634 21.7964C37.4352 22.1371 36.8677 23.6877 36.8677 23.6877H33.4005L38.3044 12.1487C38.6516 11.3287 39.2434 11.1035 40.034 11.1035ZM40.2848 14.4882C40.1189 14.9563 39.8302 15.7122 39.8495 15.679C39.8495 15.679 38.8121 18.4458 38.5407 19.164L41.2668 19.1624C41.0136 17.9624 40.7601 16.7625 40.5064 15.5626L40.2848 14.4883V14.4882Z"
                  fill="#112211"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 cursor-pointer sm:col-span-6 col-span-10 border-dashed hover:bg-[#effdf9ad] border-2 h-[212px] rounded-2xl border- border-[#8dd3bb] flex flex-col justify-center items-center" onClick={()=>setOpenModalStatus(true)}>
          <PiPlusCircleThin className="text-[64px] fill-[#8dd3bb]" />
          <span className="mt-[10px] opacity-75 text-[#121] text-xs">
            Add a new card
          </span>
        </div>
      </div>
      <Modal title="" open={addCardModalStatus} onCancel={()=>setOpenModalStatus(false)} footer={false}>
        <div className="sm:py-11 py-6 sm:px-10 px-5">
          <h3 className="text-black text-[40px] font-bold">Add a new Card</h3>
          <Form className="grid grid-cols-12 gap-6 mt-12">
            <FieldSetComponent title="Card Number" className="col-span-12">
              <Input className="w-full"  bordered={false}
              prefix=""
              suffix={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_3059_893)">
                <path d="M0.96 4.70605C0.429912 4.70605 0 5.13585 0 5.66605V18.8181C0 19.3482 0.430128 19.7781 0.96 19.7781H23.04C23.5701 19.7781 24 19.3483 24 18.8181V5.66605C24 5.13587 23.5699 4.70605 23.04 4.70605H0.96ZM14.334 9.1978C14.9181 9.1978 15.3862 9.32682 15.6847 9.4468L15.4807 10.7301L15.3457 10.6618C15.0677 10.5418 14.7105 10.4264 14.2177 10.4345C13.6279 10.4345 13.3553 10.6977 13.3553 10.9438C13.3518 11.2212 13.6739 11.4041 14.2005 11.6781C15.0697 12.1007 15.4714 12.6131 15.4658 13.2868C15.4541 14.516 14.426 15.3103 12.8423 15.3103C12.1666 15.3029 11.5156 15.1598 11.1637 14.9945L11.3753 13.6685L11.5695 13.7631C12.0643 13.9841 12.3847 14.0736 12.9877 14.0736C13.4208 14.0736 13.8856 13.8922 13.8893 13.4953C13.8921 13.2361 13.695 13.0513 13.1085 12.7611C12.537 12.4778 11.7794 12.0032 11.7878 11.1523C11.7967 10.0012 12.8453 9.1978 14.334 9.1978ZM2.12249 9.38605H4.55474C4.88227 9.39844 5.1467 9.50389 5.238 9.85931L5.76226 12.5653C5.76233 12.5656 5.76216 12.5665 5.76226 12.5668L5.91974 13.3776L7.39649 9.38605H8.994L6.61949 15.2286L5.02349 15.2301L3.753 10.5155C4.50895 10.916 5.15254 11.3794 5.52526 12.0171C5.42916 11.8153 5.30254 11.5875 5.14051 11.3631C4.95182 11.1016 4.54433 10.7641 4.374 10.6205C3.78048 10.1202 2.97444 9.71613 2.10374 9.50231L2.12249 9.38605ZM9.62926 9.3928H11.1915L10.2142 15.2263H8.652L9.62926 9.3928ZM18.453 9.3928H19.6365L20.8755 15.2263H19.455C19.455 15.2263 19.3141 14.5561 19.2683 14.3518C19.045 14.3518 17.4834 14.3496 17.3077 14.3496C17.2483 14.5075 16.9853 15.2263 16.9853 15.2263H15.378L17.6513 9.87731C17.8122 9.4972 18.0865 9.3928 18.453 9.3928ZM18.5693 10.9618C18.4924 11.1788 18.3585 11.5292 18.3675 11.5138C18.3675 11.5138 17.8866 12.7964 17.7608 13.1293L19.0245 13.1285C18.9071 12.5723 18.7896 12.0161 18.672 11.4598L18.5693 10.9618V10.9618Z" fill="#1434CB"/>
              </g>
              <defs>
                <clipPath id="clip0_3059_893">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.241943)"/>
                </clipPath>
              </defs>
            </svg>}
              />
            </FieldSetComponent>
            <FieldSetComponent title="Exp. Date" className="col-span-6">
              <Input defaultValue={"2/27"} bordered={false}/>
            </FieldSetComponent>
            <FieldSetComponent title="CVC" className="col-span-6">
              <Input defaultValue={"123"} bordered={false}/>
            </FieldSetComponent>
            <FieldSetComponent title="Name on Card" className="col-span-12">
              <Input defaultValue={"John Doe"} bordered={false}/>
            </FieldSetComponent>
            <FieldSetComponent title="Country or Region" className="col-span-12">
              <Select defaultValue={"uz"} bordered={false}>
                <Select.Option value="uz">Uzbekistan</Select.Option>
                <Select.Option value="us">United States</Select.Option>
              </Select>
            </FieldSetComponent>
            <Checkbox defaultChecked className="col-span-12"> Securely save my information for 1-click checkout</Checkbox>
            <Button className="col-span-12 bg-[#8dd3bb] text-[#121]" size="large">Add Card</Button>
            <p className="col-span-12 text-center text-xs text-[#121] opacity-75">
            By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
            </p>
          </Form>
        </div>

      </Modal>
    </div>
  );
};

export default PaymentMethods;
