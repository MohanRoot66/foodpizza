import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="">ST Pizzza</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Menu</Link>
          <Link href={"#about"} passHref>About</Link>
          <Link href={"#contact"} passHref>Contact</Link>
          <Link href={"/"} className="bg-primary text-white px-8 rounded-full py-2">Login</Link>
        </nav>
      </header>
  )
}
