import { useEffect, useState } from "react";

export default function useFetchList(DB_URL) {
  const [urlList, setUrlList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(DB_URL);
      if (response.ok) {
        const data = await response.json();
        setUrlList(data.sites);
        setCategories(data.categories);
      } else {
        console.log('error' + response.status);
      }
    };

    fetchData();
  }, [DB_URL]);

  return { urlList, categories };
}
