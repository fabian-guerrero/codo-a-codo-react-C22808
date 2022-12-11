import { useState, useEffect } from "react";

const useMostPopular = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results[0].id));
  }, [url]);

  return [data];
};

export default useMostPopular;
