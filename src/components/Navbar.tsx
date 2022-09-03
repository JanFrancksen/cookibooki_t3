import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-lime-600 w-full fixed top-0 left-0 p-4'>
        <div className='w-3/4 m-auto flex justify-between'>

        <div className="">Logo</div>
        <nav className='flex gap-x-2'>
        <Link href="#"><a>Test</a></Link>
        <Link href="#"><a>Test</a></Link>
        <Link href="#"><a>Test</a></Link> 
        </nav>
        <button className='bg-white py-2 px-4'> test</button>
        </div>
    </header>
  )
}

export default Navbar