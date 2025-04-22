import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        const res = await req.json();
        setData(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, error, loading];
};
export default useFetch;
