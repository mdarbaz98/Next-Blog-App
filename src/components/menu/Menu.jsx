import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/api/categories";
import { getPosts } from "@/api/posts";

async function Menu() {
  const data = await getPosts("popular");
  const catData = await getCategories();

  const Post = ({ image, post }) => {
    return (
      <Link href={`/posts/${post?.slug}`} className={styles.item}>
        {image && image === true && (
          <div className={styles.imgContainer}>
            <Image
              src={post?.img}
              alt={post?.img}
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category}`}>{post?.catSlug}</span>
          <h3 className={styles.postTitle}>{post?.title}</h3>
          <div className={styles.detail}>
            <span className={styles.author}>{post?.user?.name}</span>
            <span className={styles.date}> - {post?.createdAt.substring(0,10)}</span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{`What's hot`}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {data?.posts?.map((item) => {
          return <Post key={item._id} image={false} post={item} />;
        })}
      </div>
      <h2 className={styles.subTitle}>Discover By Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        {catData?.map((item) => {
          return (
            <Link
            key={item._id}
              href={`/blog?category=${item.slug}`}
              className={styles.categoryItem}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <h2 className={styles.subTitle}>{`Chosen By the Editor`}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
      {data?.posts?.map((item) => {
          return <Post image={true} key={item._id} post={item} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
