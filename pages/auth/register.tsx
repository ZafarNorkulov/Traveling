import React from 'react'
import noneLayout from '../../layouts/noneLayout'
import RegisterComponent from '../../components/auth/register'
import Head from 'next/head'
const Register = () => {
  return (
    <div className='h-[100vh] overflow-hidden bg-scroll'>
       <Head>
        <title>Airways | Register</title>
        <meta name="description" content={"Airways Traveling sayt"} />
        </Head>
      <RegisterComponent/>
    </div>
  )
}

export default Register

Register.layout = noneLayout