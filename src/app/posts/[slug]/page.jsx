import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comment from "@/components/comment/Comment";
import { UserAvatar } from "@/components/userAvatar/UserAvatar";
import { getSinglePost } from "@/api/posts";

async function SinglePage({params}) {

  const {slug} = params;

  const post = await getSinglePost(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <UserAvatar user={post?.user} createdAt={post?.createdAt} />
        </div>
        <div className={styles.imgContainer}>
          {post?.img && <Image src={post.img} className={styles.image} alt={post.title} fill />}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            {post && <div className={styles.description} dangerouslySetInnerHTML={{__html:post?.desc}}>
            </div>}
            <Comment postSlug={post?.slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
