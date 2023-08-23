import React from 'react'
import noneLayout from '../../layouts/noneLayout'
import LoginPage from '../../components/authComponents/login'
import Head from 'next/head'
const Login = () => {
  return (
    <div>
         <Head>
        <title>Airways | Login</title>
        <meta name="description" content={"Airways Traveling sayt"} />
        </Head>
      <LoginPage/>
    </div>
  )
}

export default Login
Login.layout = noneLayout
