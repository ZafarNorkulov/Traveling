import React from 'react'
import noneLayout from '../../layouts/noneLayout'
import RegisterComponent from '../../components/authComponents/register'
import Head from 'next/head'
const Register = () => {
  return (
    <div>
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