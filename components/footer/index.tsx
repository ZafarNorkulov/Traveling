import { Button, Form, Input, Layout } from 'antd'
import Image from 'next/image'
import React from 'react'
import Letter from "../../public/images/letter.png"
import LogoWhite from "../../public/images/Logo-white.png"
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import {AiFillInstagram} from "react-icons/ai"


const FooterComponent = () => {
    const {Footer} = Layout
  return (
    <Footer className='footer bg-[#8DD3BB] px-0 mt-[263px]'>
      <div className="myContainer">
        <div className="footer-top-content mb-[64px] relative -mt-[12%] flex justify-between bg-[#CDEAE1] px-6 rounded-[20px] shadow-[0px 4px 16px 0px rgba(17, 34, 17, 0.05)]">
           <div className='py-6'>
           <h2 className='xl:text-[44px] md:text-[34px] text-[25px] font-bold xl:max-w-[364px] md:max-w-[300px] max-w-[200px] xl:leading-[54px] md:leading-[40px] leading-[30px]'>Subscribe Newsletter</h2>
           <h4 className='sm:mt-6 mt-8 md:text-xl text-md mb-2'>The Travel</h4>
           <p className='opacity-70 mb-4 md:text-base text-xs'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
           <Form  className='flex sm:flex-row flex-col gap-4'>
           <Input placeholder='Your email address' className='h-[40px] rounded-[4px] py-2 px-4 '/>
           <Button  className='bg-[#121] h-full py-2 px-4 text-white'>Subscribe</Button>
           </Form>
           </div>
           <Image src={Letter} className='xl:max-w-[400px] md:max-w-[300px] md:static absolute right-2 sm:top-0 top-[21%] sm:max-w-[200px] max-w-[100px]' alt=''/>
        </div>
       <div className="grid grid-cols-12 gap-y-6 footer-bottom-content">
        <div className="xl:col-span-2 sm:col-span-4 col-span-12 sm:mx-0 mx-auto sm:text-start text-center">
         <div>
           <Image src={LogoWhite} alt='logo' />
         </div>
         <div className="flex items-center gap-x-3 mt-6">
           <BsFacebook className='text-xl'/>
           <BsTwitter className='text-xl'/>
           <BsYoutube className='text-xl'/>
           <AiFillInstagram className='text-xl'/>
         </div>
        </div>
        <div className="xl:col-span-2 sm:col-span-4 col-span-12 sm:mx-0 mx-auto sm:text-start text-center gap-y-3 flex flex-col">
          <h5 className='text-base font-bold mb-1'>Our Destinations</h5>
          <p className='text-sm font-medium opacity-70'>Canada</p>
          <p className='text-sm font-medium opacity-70'>Alaska</p>
          <p className='text-sm font-medium opacity-70'>France</p>
          <p className='text-sm font-medium opacity-70'>Iceland</p>
        </div>
        <div className="xl:col-span-2 sm:col-span-4 col-span-12 sm:mx-0 mx-auto sm:text-start text-center gap-y-3 flex flex-col">
          <h5 className='text-base font-bold mb-1'>Our Activities</h5>
          <p className='text-sm font-medium opacity-70'>Northern Lights</p>
          <p className='text-sm font-medium opacity-70'>Cruising & sailing</p>
          <p className='text-sm font-medium opacity-70'>Multi-activities</p>
          <p className='text-sm font-medium opacity-70'>Kayaing</p>
        </div>
        <div className="xl:col-span-2 sm:col-span-4 col-span-12 sm:mx-0 mx-auto sm:text-start text-center gap-y-3 flex flex-col">
          <h5 className='text-base font-bold mb-1'>Travel Blogs</h5>
          <p className='text-sm font-medium opacity-70'>Bali Travel Guide</p>
          <p className='text-sm font-medium opacity-70'>Sri Lanks Travel Guide</p>
          <p className='text-sm font-medium opacity-70'>Peru Travel Guide</p>
          <p className='text-sm font-medium opacity-70'>Bali Travel Guide</p>
        </div>
        <div className="xl:col-span-2 sm:col-span-4 col-span-12 sm:mx-0 mx-auto sm:text-start text-center gap-y-3 flex flex-col">
          <h5 className='text-base font-bold mb-1'>About Us</h5>
          <p className='text-sm font-medium opacity-70'>Our Story</p>
          <p className='text-sm font-medium opacity-70'>Work with us</p>
        </div>
        <div className="xl:col-span-2 sm:col-span-4 col-span-12 sm:mx-0 mx-auto sm:text-start text-center gap-y-3 flex flex-col">
          <h5 className='text-base font-bold mb-1'>Contact US</h5>
          <p className='text-sm font-medium opacity-70'>Our Story</p>
          <p className='text-sm font-medium opacity-70'>Work with us</p>
        </div>
      
       </div>
      </div>
    </Footer>
  )
}

export default FooterComponent
