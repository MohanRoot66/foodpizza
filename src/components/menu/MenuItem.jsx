import React from 'react'

export default function MenuItem() {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:shadow-2xl hover:shadow-black/25 transition-all hover:bg-white'>
        <div className='text-center'>
            <img src="/pizza.png" className='max-h-auto max-h-24 block mx-auto' alt="Image"/>
        </div>
        <h2 className='font-semibold my-3 text-xl'>Pepperroni Pizza</h2>
        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
        <button className='mt-4 bg-primary rounded-full text-white px-8 py-2'>Add to cart ${6}</button>
    </div>
  )
}
