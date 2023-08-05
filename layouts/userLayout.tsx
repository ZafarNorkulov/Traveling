import React, { PropsWithChildren } from 'react'
import CHeader from '../components/header'
import Footer from '../components/footer'

const userLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
        <CHeader/>
      {children}
      <Footer/>
    </div>
  )
}

export default userLayout
