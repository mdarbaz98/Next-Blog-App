
export const getCategories = async () => {
    const res = await fetch(`${process.env.APP_LIVE_SERVER_URL}/api/categories`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw Error("Failed");
    }
  
    return res.json();
  };