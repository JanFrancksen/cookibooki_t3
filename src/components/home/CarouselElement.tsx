import Image from 'next/image'
import React from 'react'

const CarouselElement = ({title, img, description}:any) => {
  return (
    <div className='basis-72 shrink-0 grow-0 h-auto bg-cb_blue text-cb_white'>
        <Image src={img} width="400" height="220" />
        <div className='p-4'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default CarouselElement