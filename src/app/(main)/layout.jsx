import dns from 'node:dns';
dns.setServers(['8.8.8.8','8.8.4.4']);
import Header from '@/components/shared/Header'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
        <Header/>
        <Navbar/>
        {children}

    </>
  )
}

export default MainLayout