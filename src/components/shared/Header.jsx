import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { format } from 'date-fns'
import BreakingNews from '@/components/shared/BreakingNews'
const Header = () => {
  return (
    <div className='text-center'>
      <Image src={logo} className='mx-auto py-8' width={300} height={200} alt='logo'/>
      <p>Journalism Without Fear or Favour</p>
     { format(new Date(), "EEEE, MMM dd, yyyy")}
     <BreakingNews/>
    </div>
  )
}

export default Header