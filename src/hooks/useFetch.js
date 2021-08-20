import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const gambiarra = useRef(url);

  const fetchData = async () => {
    const dataRaw = await fetch(gambiarra.current);
    const dataJSON = dataRaw.json();
    setData(dataJSON);
    return dataJSON;
  };

  // load
  useEffect(() => {
    fetchData();
  }, [url]);

  // return
  return [data];
};
