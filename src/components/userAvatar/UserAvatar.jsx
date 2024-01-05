import React from "react";
import styles from './userAvatar.module.css'
import Image from "next/image";
export const UserAvatar = ({user,createdAt}) => {

  return (
    <div className={styles.user}>
      <div className={styles.userImageContainer}>
        <Image className={styles.avatar} src={user?.image} alt={user?.image} fill />
      </div>
      <div className={styles.userTextContainer}>
        <span className={styles.username}>{user?.name}</span>
        <span className={styles.date}>{createdAt?.substring(0,10)}</span>
      </div>
    </div>
  );
};
