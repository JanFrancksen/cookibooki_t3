import Image from 'next/image'
import React from 'react'
import food from "../../../public/images/food.jpg"

const Hero = () => {

    const title = "Kartoffelstampf mit lecker Gedöns"

  return (
    <div className='w-3/4 m-auto my-40 h-96 relative border-t-8 border-pink-400'>
        <Image src={food} layout="fill" objectFit="cover"/>
        <div className='absolute inset-0 bg-gradient-to-tr from-black via-transparent'></div>
        <div className='absolute -bottom-0 left-10 w-80 translate-y-1/4'>
            <h1 className='text-white font-bold'>Rezept des Tages</h1>
            <h2 className='text-4xl font-black  text-sky-300 decoration-pink-400 uppercase underline decoration-solid decoration-8'>{title}</h2>
        </div>
        </div>
  )
}

export default Hero