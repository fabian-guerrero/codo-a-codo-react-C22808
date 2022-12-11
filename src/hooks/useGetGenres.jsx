import { useState, useEffect } from "react";

const useGetGenres = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.genres));
  }, [url]);

  return [data];
};

export default useGetGenres;
