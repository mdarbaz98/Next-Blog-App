import baseURL from "./baseUrl";

export const getCategories = async () => {
    const res = await fetch(`${baseURL}/api/categories`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw Error("Failed");
    }
  
    return res.json();
  };