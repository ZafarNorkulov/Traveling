import Image from 'next/image'
import React from 'react'
import logoLight from "../../public/images/Logo-white.png"
import logoGreen from "../../public/images/Logo-green.png"
import Link from 'next/link'
const WhiteLogo = ({className}:{className?:string}) => {
  return (
    <Link href="/" className={className}> 
   <Image src={logoLight} alt=''/>
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

export {WhiteLogo,GreenLogo}
