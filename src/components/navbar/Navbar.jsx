import React from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div>
      <div className={style.logo}>Medium</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link className={style.link} href='/'>Home</Link>
        <Link className={style.link} href='/about'>About</Link>
        <Link className={style.link} href='/contact'>Contact</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar