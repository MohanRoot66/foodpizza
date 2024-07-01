"use client"

import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {

  const {status} = useSession();

  return (
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="/">ST Pizzza</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Menu</Link>
          <Link href={"#about"} passHref>About</Link>
          <Link href={"#contact"} passHref>Contact</Link>
        </nav>
        <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
          {
            status==="authenticated" && (
              
              <Link href={"/"} className="bg-primary text-white px-8 rounded-full py-2" onClick={()=>signOut()}>Logout</Link>
              
            )
          }
          {
            status==="unauthenticated" && (
              <>
              <Link href={"/login"} className="">Login</Link>
              <Link href={"/register"} className="bg-primary text-white px-8 rounded-full py-2">Register</Link>
              </>
            )
          }
        </nav>
      </header>
  )
}
