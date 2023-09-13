import Head from 'next/head'
import React from 'react'
import ForgotPasswordComponent from '../../components/auth/forgotPassword'
import noneLayout from '../../layouts/noneLayout'

const ForgotPassword = () => {
  return (
    <div className='h-[100vh]'>
       <Head>
        <title>Airways | Forgot password</title>
        <meta name="description" content={"Airways Traveling sayt"} />
        </Head>
        <ForgotPasswordComponent/>
    </div>
  )
}

export default ForgotPassword
ForgotPassword.layout = noneLayout