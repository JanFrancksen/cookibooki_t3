import Link from 'next/link'
import React from 'react'
import NavUser from './NavUser'

const Navbar = () => {
  return (
    <header className='bg-gradient-to-r from-cyan-500 to-sky-500 w-full fixed top-0 left-0 p-4'>
        <div className='w-3/4 m-auto flex justify-between items-center'>

        <div className="text-white font-black">CookiBooki</div>
        <nav className='flex gap-x-4 text-white font-medium'>
        <Link href="#"><a className='hover:text-pink-400'>Rezepte</a></Link>
        <Link href="#"><a className='hover:text-pink-400'>Affiliates</a></Link>
        <Link href="#"><a className='hover:text-pink-400'>Kochbuch</a></Link> 
        <Link href="#"><a className='hover:text-pink-400'>Wochenplan</a></Link> 
        <Link href="#"><a className='hover:text-pink-400'>Blog</a></Link> 
        </nav>
        <NavUser/>

        </div>
    </header>
  )
}

export default Navbar