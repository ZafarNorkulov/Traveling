import Image from 'next/image'
import React from 'react'
import firstRecentPhoto from "../../public/images/firstsearch.png"
import secondRecentPhoto from "../../public/images/secondsearch.png"
import thirdRecentPhoto from "../../public/images/thirdsearch.png"
import fourthRecentPhoto from "../../public/images/fourthsearch.png"
const RecentSearches = () => {
  return (
    <div className='myContainer grid grid-cols-12 gap-8'>
      <h4 className='col-span-12 component-title'>Your recent searches</h4>
      <div className="col-span-3 flex items-center gap-4">
        <Image src={firstRecentPhoto} alt="" />
        <div className="flex flex-col gap-2">
        <h6 className='text-base font-semibold'>Istanbul, Turkey</h6>
        <p className='text-xs'>325 places</p>
        </div>
      </div>
      <div className="col-span-3 flex items-center gap-4">
        <Image src={secondRecentPhoto} alt="" />
        <div className="flex flex-col gap-2">
        <h6 className='text-base font-semibold'>Sydney, Australia</h6>
        <p className='text-xs'>325 places</p>
        </div>
      </div>
      <div className="col-span-3 flex items-center gap-4">
        <Image src={thirdRecentPhoto} alt="" />
        <div className="flex flex-col gap-2">
        <h6 className='text-base font-semibold'>Baku, Azerbaijan</h6>
        <p className='text-xs'>325 places</p>
        </div>
      </div>
      <div className="col-span-3 flex items-center gap-4">
        <Image src={fourthRecentPhoto} alt="" />
        <div className="flex flex-col gap-2">
        <h6 className='text-base font-semibold'>Malé, Maldives</h6>
        <p className='text-xs'>325 places</p>
        </div>
      </div>
    </div>
  )
}

export default RecentSearches
