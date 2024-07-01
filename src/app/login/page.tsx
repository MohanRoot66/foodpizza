"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import {signIn} from "next-auth/react"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginprogress,setLoginProgress] = useState(false);

  const handleSubmit = async(evn) =>{
    evn.preventDefault()
    setLoginProgress(true)
    
    await   signIn("credentials",{
      email,password})

    setLoginProgress(false)
  }



  return (
    <section className='mt-8'>
        <h1 className='text-center text-4xl text-primary mb-4'>
          Login
        </h1>
        <form className='max-w-xs mx-auto' onSubmit={handleSubmit}>
            <input disabled={loginprogress} name='email' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
            <input disabled={loginprogress} name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />    
            <button type='submit' disabled={loginprogress}  >Login</button>
            <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button className='flex items-center gap-3 p-2 justify-center'>
                    <Image src={'/google.png'} height={24} width={24} alt="" />
                    Login with Google
                </button>
        </form>
    </section>
  )
}
