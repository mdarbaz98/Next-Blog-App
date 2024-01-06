import baseURL from "./baseUrl";

export const getSinglePost = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw Error(`Request failed with status ${res.status}: ${res.statusText}`);
    }
  
    return res.json();
  };  

export const getPosts = async (type) => {
    const res = await fetch(`http://localhost:3000/api/posts?type=${type}`);
    const data = await res.json();
    if (!res.ok) {
      throw Error(`Request failed with status ${res.status}: ${res.statusText}`);
    }
    return data;
  };

  export const getPostsWithCategory = async (page, category) => {
    const res = await fetch(
      `http://localhost:3000/api/posts?page=${page}&category=${category || ""}`,
      {
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw Error(`Request failed with status ${res.status}: ${res.statusText}`);
    }
  
    return res.json();
  };