import { useFetch } from "../../hooks/useFetch";
import { PokeCard } from "../../components/PokeCard";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
export const Home = () => {
  const [offset, setOffSet] = useState(20);
  const [limit, setLimit] = useState(10);

  const [data, refetchData] = useFetch();

  // realiza nova requisição com valores dinâmicos alterados via botão
  useEffect(() => {
    refetchData(offset, limit);
  }, [offset, limit, refetchData]);

  const handleNewPokemons = () => {
    setLimit(limit + 10);
    setOffSet(offset + 10);
  };

  return (
    <div>
      <div>
        {data &&
          data?.results?.map((value) => (
            <div key={value.name}>
              <PokeCard value={value} />
            </div>
          ))}
      </div>
      <Button
        text={"Render New Pokemons"}
        onButtonClicked={handleNewPokemons}
      />
      <p>Link : {data?.next}</p>
    </div>
  );
};
