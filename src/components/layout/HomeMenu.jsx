import React from 'react'
import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import SectionHeader from './SectionHeader'

export default function HomeMenu() {
  return (
    <section className='relative'>
        <div className='absolute left-0 right-0 w-full justify-start'>
            <div className='absolute -left-[65px] -top-[28px] text-left -z-10'>
                <Image src={"/sallad1.png"}  width={109} height={189} alt='salad' />
            </div>
            <div className='absolute -top-[100px] -right-[20px] -z-10'>
                <Image src={"/sallad2.png"} width={107} height={197} alt='salad' />
            </div>
        </div>
        <div className="text-center mb-4">
            <SectionHeader subHeader="Checkout" mainHeader="Menu" />
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div> 

    </section>
  )
}
