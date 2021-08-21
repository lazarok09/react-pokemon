import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const refetchData = async (url) => {
    const dataRaw = await fetch(url);
    const dataJSON = await dataRaw.json();

    setData(dataJSON);
    setIsLoading(false);
    return dataJSON;
  };

  // return
  return [data, refetchData, isLoading];
};
