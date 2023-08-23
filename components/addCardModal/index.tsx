import { Button, Checkbox, Form, Input, Modal, Select } from 'antd'
import React, { Dispatch } from 'react'
import FieldSetComponent from '../filedSet'

const AddCardModal = ({modalStatus,setOpenModalStatus}:{modalStatus:boolean,setOpenModalStatus:Dispatch<boolean>}) => {
    
  return (
    <Modal title="" open={modalStatus} onCancel={()=>setOpenModalStatus(false)} footer={false}>
        <div className="sm:py-11 py-6 sm:px-10 px-5">
          <h3 className="text-black text-[40px] font-bold">Add a new Card</h3>
          <Form className="grid grid-cols-12 gap-6 mt-12">
            <FieldSetComponent title="Card Number" className="col-span-12">
              <Input className="w-full" minLength={16} maxLength={16}  bordered={false}
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
  )
}

export default AddCardModal
