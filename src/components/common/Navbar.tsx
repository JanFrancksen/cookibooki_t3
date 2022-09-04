import Link from 'next/link'
import React from 'react'
import NavUser from './NavUser'

const Navbar = () => {
  return (
    <header className='navbar w-full fixed top-0 left-0 p-4 z-10 bg-cb_blue'>
        <div className='w-3/4 m-auto flex justify-between items-center'>

        <div className="text-white font-black">CookiBooki</div>
        <nav className='flex gap-x-4'>
        <Link href="#"><a className='navitem'>Rezepte</a></Link>
        <Link href="#"><a className='navitem'>Affiliates</a></Link>
        <Link href="#"><a className='navitem'>Kochbuch</a></Link> 
        <Link href="#"><a className='navitem'>Wochenplan</a></Link> 
        <Link href="#"><a className='navitem'>Blog</a></Link> 
        </nav>
        <NavUser/>

        </div>
    </header>
  )
}

export default Navbar