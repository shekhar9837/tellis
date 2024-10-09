import Image from 'next/image'
import React from 'react'

const Mustache = () => {
  return (
    <div className='flex items-center justify-center w-full'>
    <div className='w-20 h-[1px] bg-text'></div>
    <div><Image
      src='/assets/single-mustache.png'
      width={300}
      height={300}
      alt='mustache'
      className='w-12 '
    /></div>
    <div className='w-20 h-[1px] bg-text'></div>
  </div>   
  )
}

export default Mustache