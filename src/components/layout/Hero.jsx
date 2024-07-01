import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

export default function Hero() {
  return (
    <section className='hero'>
        <div className='py-2'>
            <h1 className='text-4xl font-semibold'>Everything <br/> is better <br/> with a <span className='text-primary'>Pizza</span></h1>
            <p className='my-4 text-gray-500 text-sm'>Pizzza is the missing piece that 
                makes  every day complete , a simple but yet delicious
            </p>
            <div className='flex gap-4'>
                <button className='bg-primary flex justify-center uppercase flex gap-2 text-sm items-center rounded-full px-4 py-2 text-white'> Order Now
                <Right />
                </button>
                <button className='flex gap-2 text-gray-600 py-2 items-center border-0 font-semibold'>Learn more
                    <Right />
                </button>
            </div>
        </div>
        <div className='relative'>
            <Image src={"/pizza.png"} objectFit='contain' fill alt='Pizzaa'/>
        </div>
    </section>
  )
}
