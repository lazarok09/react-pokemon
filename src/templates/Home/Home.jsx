import { useFetch } from "../../hooks/useFetch";
import { PokeCard } from "../../components/PokeCard";
export const Home = () => {
  const [data] = useFetch("https://pokeapi.co/api/v2/pokemon");

  return (
    <div>
      <div>
        {data &&
          data?.results?.map((value) => (
            <PokeCard key={value.count} value={value} />
          ))}
      </div>
      <p>Link : {data?.next}</p>
    </div>
  );
};
