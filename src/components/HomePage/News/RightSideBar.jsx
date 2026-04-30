'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const RightSideBar = () => {

  const handleSignupWithGoogle =async () => {
   const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  const handleSignupWithGithub =async () => {
   const data = await authClient.signIn.social({
    provider: "github",
  });
  }


  return (
      <section className="flex flex-col gap-3">
          <h2 className='text-2xl font-semibold'>Login With</h2>
          <div onClick={handleSignupWithGoogle} className="flex btn btn-outline gap-2 items-center px-3 py-2 text-blue-500 font-bold rounded-lg">
            <FaGoogle/> <p className='text-xs md:text-base'>Login With Google</p>
          </div>
          <div onClick={handleSignupWithGithub} className="flex btn btn-outline gap-2 items-center px-3 py-2 text-gray-950-500 font-bold rounded-lg">
            <FaGithub/> <p className='text-xs md:text-base'>Login With Github</p>
          </div>
         
        </section>
  )
}

export default RightSideBar