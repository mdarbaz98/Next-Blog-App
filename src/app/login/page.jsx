"use client";

import React, { useState } from "react";
import styles from "./Login.module.css";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
  let initial = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initial);

  const { data, status } = useSession();

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if( status === 'loading' ){
    return <div>
      Loading...
    </div>
  }
  if( status === 'authenticated' ){
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={"/logo3.jpeg"} alt="" fill />
        </div>
        <form className={styles.loginForm} action="">
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                handleChange(e);
              }}
              className={styles.input}
              placeholder="Please enter your email"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) => {
                handleChange(e);
              }}
              className={styles.input}
              placeholder="Please enter your password"
            />
          </div>
          <button className={styles.submit}>Submit</button>
        </form>
        <small>Or Sign With</small>
        <div className={styles.socials}>
          <button onClick={() => signIn("facebook")} className={styles.social}>
            <FaGoogle />
          </button>
          <button className={styles.social}>
            <FaFacebookF />
          </button>
          <button className={styles.social}>
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
