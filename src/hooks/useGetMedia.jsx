import { useState, useEffect } from "react";

const useGetMedia = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [url]);

  return [data];
};

export default useGetMedia;
