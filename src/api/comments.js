export const commentsFetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
    return data;
  };