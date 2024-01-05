import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Odit, quibusdam.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' fill />
        </div>
        <div className={styles.textContainer}>
            <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur.</h2>
            <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla cum ipsa inventore molestiae maxime velit culpa reiciendis, quasi, voluptatibus, animi nesciunt voluptates asperiores eaque ratione consectetur rerum distinctio neque!</p>
            <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured