import React, { useEffect, useState } from 'react'
import ComponentsHead from '../helperComponents/componentsHead'
import olga from "../../public/images/olga.png"
import thomas from "../../public/images/thomas.png"
import eliot from "../../public/images/eliot.png"
import Stars from '../stars'
import Google from "../../public/images/google.png"
import Image from 'next/image'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import useWindowSize from '../../custom-hooks/useWindowSize'
const Reviews = () => {

    const {width} = useWindowSize()
    const [datas,setDatas] = useState([
        {
            title: `“A real sense of community, nurtured”`,
            desc: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
            place: "Olga",
            place_desc: "Weave Studios – Kai Tak",
            social_media: "Google",
            img: olga
        },
        {
            title: `“The facilities are superb. Clean, slick, bright.”`,
            desc: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
            place: "Thomas",
            place_desc: "Weave Studios – Olympic",
            social_media: "Google",
            img: thomas
        },
        {
            title: `“A real sense of community, nurtured”`,
            desc: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
            place: "Eliot",
            place_desc: "Weave Studios – Kai Tak",
            social_media: "Google",
            img: eliot
        },
        {
            title: `“A real sense of community, nurtured”`,
            desc: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
            place: "Eliot",
            place_desc: "Weave Studios – Kai Tak",
            social_media: "Google",
            img: eliot
        },
    ])
    
  return (
    <div className='review myContainer mt-[70px] mb-10'>
      <ComponentsHead title='Reviews' desc='What people says about Golobe facilities' btnText='See All'/>
    <Swiper slidesPerView={width>1280 ? 3 : width > 768 ? 2 :  1} spaceBetween={50}  className="mySwiper">
        {datas?.map((item,index)=>(
            
        <SwiperSlide  key={index} className='py-[26px]'>
            <div className="review-card col-span-4 p-6 bg-white rounded-[20px] max-h-[584px]">
                
    <h4 className='lg:text-2xl text-lg font-bold font-TradeGothic h-16'>{item?.title}</h4>
    <p className="review-desc text-sm font-medium font-Montserrat opacity-50 my-4 ">{item?.desc}</p>
    <Stars rating={5} fill="#FFC107"/>
    <h6 className='text-sm font-bold font-TradeGothic mt-5'>{item?.place}</h6>
    <p className='text-xs font-medium font-Montserrat opacity-50'>{item?.place_desc}</p>
    <span className='flex items-center mt-3 mb-10 gap-4'>
        <Image src={Google} className={"max-w-6 max-h-6"} alt=""/>
        <p className='text-xs font-bold font-TradeGothic opacity-40'>{item?.social_media}</p>
    </span>
    <Image src={item?.img} className='h-[200px] rounded-lg' alt=''/>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    
    </div>
  )
}

export default Reviews
