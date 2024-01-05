import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/api/categories";

async function CategoryList() {
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => {
          return (
            <Link
              key={item._id}
              href={`/blog?category=${item.slug}`}
              className={`${styles.category}`}
            >
              <Image
                src={item.img}
                width={32}
                height={32}
                alt={item.title}
                className={styles.image}
              />
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
