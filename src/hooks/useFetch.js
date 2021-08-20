import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);

  const refetchData = async (url) => {
    const dataRaw = await fetch(url);
    const dataJSON = await dataRaw.json();

    setData(dataJSON);
    return dataJSON;
  };

  // return
  return [data, refetchData];
};
