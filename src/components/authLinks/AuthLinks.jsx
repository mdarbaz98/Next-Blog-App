"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from './authLinks.module.css'
import { LuMenu } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {

  const [open, setOpen] = useState(false); 
  const { data, status } = useSession();
  return (
    <>
      {status !== "authenticated" ? (
        <Link className={`${style.hide} ${style.link}`} href='/login'>Login</Link>
      ) : (
        <>
          <Link className={`${style.hide} ${style.link}`} href='/write'>Write</Link>
          <span className={`${style.hide} ${style.link}`} onClick={signOut} >Logout</span>
        </>
      )}
      <LuMenu className={style.menu} onClick={() => setOpen(!open)} />
      {open && (<div className={style.responsiveMenu}>
        <Link href='/home'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        { status !== "authenticated" ? (<Link href='/login'>Login</Link>) : (<>
        <Link href={'/write'}>Write</Link>
        <span className={style.link} onClick={signOut} >Logout</span>
        </>)}
      </div>)}
    </>
  );
}

export default AuthLinks;
