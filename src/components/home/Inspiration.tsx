import Image from 'next/image'
import React from 'react'
import food from "../../../public/images/food.jpg"


const Inspiration = () => {
  return (
    <div className="w-3/4 m-auto my-20">
        <h2 className='header1 my-8'>Inspiration gefällig?</h2>
        <div className='grid grid-cols-3 gap-x-8'>
            <div className="relative h-fit">
                <Image src={food} width="400" height="300" />
                    <h1 className='absolute bottom-4 left-4 text-xl font-bold text-cb_white drop-shadow-sm'>Kochen</h1>
  
            </div>
            <div className="relative h-fit">
                <Image src={food} width="400" height="300" />
                    <h1 className='absolute bottom-4 left-4 text-xl font-bold text-cb_white drop-shadow-sm'>Backen</h1>
  
            </div>     <div className="relative h-fit">
                <Image src={food} width="400" height="300" />
                    <h1 className='absolute bottom-4 left-4 text-xl font-bold text-cb_white drop-shadow-sm'>Trinken</h1>
  
            </div>
        </div>
    </div>
  )
}

export default Inspiration