import React from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../pagination/Pagination";
import { getPostsWithCategory } from "@/api/posts";

async function CardList({ page, category }) {
  const { posts, count } = await getPostsWithCategory(page, category);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  const Card = ({ post }) => {
    return (
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt={post.title} fill />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>
              {post.createdAt.substring(0, 10)}
            </span>
            -<span className={styles.category}>{post.catSlug}</span>
          </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: post?.desc.substring(0, 220) }}
          ></p>
          <Link className={styles.link} href={`/posts/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => {
          return <Card key={item._id} post={item} />;
        })}
      </div>
      <Pagination page={page} category={category} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
}

export default CardList;
