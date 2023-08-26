import Image from 'next/image'
import React from 'react'
import logoLight from "../../public/images/Logo-white.png"
import logoGreen from "../../public/images/Logo-green.png"
import logoWhite from "../../public/images/LightLogo.png"

import Link from 'next/link'
const LightLogo = ({className}:{className?:string}) => {
  return (
    <Link href="/" className={`max-w-[110px] ${className}`}> 
   <Image src={logoLight} alt=''/>
   </Link>
  )
}
const WhiteLogo = ({className}:{className?:string}) => {
  return (
    <Link href="/" className={`max-w-[110px] ${className}`}> 
   <Image src={logoWhite} alt=''/>
   </Link>
  )
}
const GreenLogo = ({className}:{className?:string}) => {
  return (
    <Link href="/" >
    <Image src={logoGreen} className={className} alt=''/>
    </Link>
  )
}

export {WhiteLogo,GreenLogo,LightLogo}
