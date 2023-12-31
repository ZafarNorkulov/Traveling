import Head from 'next/head'
import React from 'react'
import userLayout from '../../layouts/userLayout'
import ProfileComponent from '../../components/profile-components'

const Profile = () => {
  return (
    <div className='myContainer mt-12 mb-[264px]'>
      <Head>
        <title>Traveling Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileComponent/>
    </div>
  )
}

export default Profile
Profile.layout = userLayout