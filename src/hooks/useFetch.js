import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const refetchData = async (offset, limit) => {
    const dataRaw = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const dataJSON = await dataRaw.json();
    setData(dataJSON);
    return dataJSON;
  };

  // return
  return [data, refetchData];
};
