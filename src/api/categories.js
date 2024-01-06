
export const getCategories = async () => {
    const res = await fetch(`http://localhost:3000/api/categories`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw Error("Failed");
    }
  
    return res.json();
  };