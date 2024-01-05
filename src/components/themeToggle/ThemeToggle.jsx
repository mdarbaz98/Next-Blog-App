'use client';

import React, { useContext } from 'react'
import style from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'


function ThemeToggle() {

const { theme, toggle } = useContext(ThemeContext)

  return (
    <div className={style.container} onClick={toggle}>
        <Image src="/moon.png" alt='' width={15} height={15} />
        <div className={style.ball} style={theme === "dark" ? {left: "3px",backgroundColor: "white"} : {right: "3px",backgroundColor: "#white"}}></div>
        <Image src="/sun.png" alt='' width={15} height={15} />
    </div>
  )
}

export default ThemeToggle