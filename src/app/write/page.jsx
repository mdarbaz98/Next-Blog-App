"use client";

import React, { useEffect, useState } from "react";
import styles from "./write.module.css";
import { CiImageOn } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { BsImageAlt } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Write() {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState("");

  const { status } = useSession();

  const router = useRouter();
  const storage = getStorage(app);

  const notify = (message) => toast(message);


  useEffect(() => {
    const upload = () => {
      const storageRef = ref(storage, new Date().getTime() + file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            notify('Feature Image Uploaded Successfully')
            console.log("File available at", downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);


  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push('/')
  }

  function createSlug(title) {
    let slug = title.toLowerCase().replace(/\s+/g, "-");
    slug = slug.replace(/[^\w-]/g, "");

    return slug;
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: editor,
        img: media,
        slug: createSlug(title),
        catSlug: "food",
      }),
    }); 
    if(res.ok){
      notify('Successfully Published')
      setEditor('')
      setFile(null)
      setMedia('')
      setTitle('')
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer/>
      <input
        placeholder="Title"
        className={styles.titleInput}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IoAddOutline />
        </button>
        {open && (
          <div className={styles.buttons}>
            <input
              id="image"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
              placeholder="Choose file"
            />
            <label htmlFor="image" className={styles.addButton}>
              <CiImageOn />
            </label>
            <button disabled className={styles.addButton}>
              <FaVideo />
            </button>
            <button disabled className={styles.addButton}>
              <BsImageAlt />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        value={editor}
        onChange={setEditor}
        theme={null}
        placeholder="Please tell your story"
      />
      <button onClick={handleSubmit} className={styles.publish}>
        Publish
      </button>
    </div>
  );
}

export default Write;
