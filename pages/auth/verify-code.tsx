import React from 'react'
import noneLayout from '../../layouts/noneLayout'
import LoginPage from '../../components/auth/login'
import Head from 'next/head'
import VerifyCodeComponent from '../../components/auth/verifyCode'
const VerifyCode = () => {
  return (
    <div>
         <Head>
        <title>Airways | Verify code</title>
        <meta name="description" content={"Airways Traveling sayt"} />
        </Head>
      <VerifyCodeComponent/>
    </div>
  )
}

export default VerifyCode
VerifyCode.layout = noneLayout
