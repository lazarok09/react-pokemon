import { useFetch } from "../../hooks/useFetch";

export const Home = () => {
  const [data] = useFetch("https://pokeapi.co/api/v2/pokemon");
  console.log(data);
  return <h1>count: {data?.count}</h1>;
};
