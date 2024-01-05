"use client";

import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
import { UserAvatar } from "../userAvatar/UserAvatar";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { commentsFetcher } from "@/api/comments";
import baseURL from "@/api/baseUrl";

export default function Comment({ postSlug }) {

  const [comment , setComment] = useState('')
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `${baseURL}api/comments?postSlug=${postSlug}`,
    commentsFetcher
  );

  const handleSubmit = async () => {
    await fetch('/api/comments',{
      method: "POST",
      body: JSON.stringify({desc:comment,postSlug})
    })
    mutate();
    setComment('')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comments" className={styles.input} />
          <button onClick={handleSubmit} className={styles.button} disabled={!comment}>
            <IoIosSend />
          </button>
        </div>
      ) : (
        <Link href={"/login"}>Login To Write A Comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((item,ind) => {
              return (
                <div key={ind} className={styles.comment}>
                  <UserAvatar user={item?.user} createdAt={item?.createdAt} />
                  <p className={styles.desc}>{item?.desc}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
