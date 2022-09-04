import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import food from "../../../public/images/foodplate.png"

const Hero = () => {


  const [like,setlike] = useState(100)
  const [likeactive,setlikeactive] = useState(false)


    const title = "Kartoffelstampf mit lecker Gedöns"

    function likePost() {
      if(likeactive){
        setlikeactive(false)
        setlike(like-1)
    } else {
      setlikeactive(true)
      setlike(like+1)
    }
  }

  return (
    <div className='w-full h-screen relative flex items-center justify-center bg-cb_darkblue'>
      <div className='w-1/3 flex flex-col gap-y-8 items-start'>
            <h1 className='header2 text-cb_green'>Rezept des Tages</h1>
            <h2 className='header1 text-cb_white text-5xl'>{title}</h2>
        <div className='flex gap-x-4'>
        <button className='btn'>zeig mir mehr ...</button>
        {
          likeactive ? (
            <button className="flex gap-x-2 items-center justify-center text-xl text-cb_white" onClick={likePost}><FaHeart className='text-red-500'/> {like}</button>
          ) : (<button className="flex gap-x-2 items-center justify-center text-xl text-cb_white" onClick={likePost}><FaRegHeart/> {like}</button>)
        }
        
        </div>
      </div>
        <Image src={food} width={600} height={600}/>
     
        </div>
  )
}

export default Hero