import React from 'react'
import noneLayout from '../../layouts/noneLayout'
import LoginPage from '../../components/authComponents/login'
import Head from 'next/head'
import NewPasswordComponent from '../../components/authComponents/newPassword'
const NewPassword = () => {
  return (
    <div>
         <Head>
        <title>Airways | Password create</title>
        <meta name="description" content={"Airways Traveling sayt"} />
        </Head>
      <NewPasswordComponent/>
    </div>
  )
}

export default NewPassword
NewPassword.layout = noneLayout
