import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo3.jpeg"} alt="" width={50} height={50} />
          <h1 className={styles.textLogo}>Medium</h1>
        </div>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error distinctio voluptatem explicabo qui autem neque, rerum fugit assumenda soluta id itaque enim ipsa eaque numquam repellat incidunt. Quam, consequatur dolor.
        </p>
        <div className={styles.icons}>
          <Image src={'/facebook.png'} alt="" width={18} height={18} />
          <Image src={'/instagram.png'} alt="" width={18} height={18} />
          <Image src={'/youtube.png'} alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.categoryList}>
          <span className={styles.listTitle}>Links</span>
          <Link href={'/'} className={styles.link}>Home</Link>
          <Link href={'/about'} className={styles.link}>About</Link>
          <Link href={'/blogs'} className={styles.link}>Blogs</Link>
          <Link href={'/contact'} className={styles.link}>Contact</Link>
        </div>
        <div className={styles.categoryList}>
          <span className={styles.listTitle}>Social</span>
          <Link href={'/Home'} className={styles.link}>Home</Link>
          <Link href={'/About'} className={styles.link}>About</Link>
          <Link href={'/Blogs'} className={styles.link}>Blogs</Link>
          <Link href={'/Contact'} className={styles.link}>Contact</Link>
        </div>
        <div className={styles.categoryList}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={'/Home'} className={styles.link}>Home</Link>
          <Link href={'/About'} className={styles.link}>About</Link>
          <Link href={'/Blogs'} className={styles.link}>Blogs</Link>
          <Link href={'/Contact'} className={styles.link}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
