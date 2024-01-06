"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
function Pagination({ page, category, hasPrev, hasNext }) {
  const router = useRouter();
  const extra = `&category=${category}`;
  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}${category ? `&category=${category}` : ''}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}${category ? `&category=${category}` : ''}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
