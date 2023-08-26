import React, { PropsWithChildren } from 'react'
import CHeader from '../components/header'
import Footer from '../components/footer'
import HeaderForHome from '../components/header/headerForHome'

const HomeLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
        <HeaderForHome/>
      {children}
      <Footer/>
    </div>
  )
}

export default HomeLayout
