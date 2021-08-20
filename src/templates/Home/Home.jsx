import { useFetch } from "../../hooks/useFetch";
import { PokeCard } from "../../components/PokeCard";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export const Home = () => {
  const [data, refetchData] = useFetch();
  const [refetechDataState] = useState(() => refetchData);

  const [isDisabled, setIsDisabled] = useState(false);

  // realiza nova requisição com valores dinâmicos alterados via botão
  useEffect(() => {
    let limit = "?offset=10&limit=10";

    refetechDataState("https://pokeapi.co/api/v2/pokemon" + limit);
  }, [refetechDataState]);

  // first button
  const handleNextPokemons = () => {
    if (data.previous !== null) {
      setIsDisabled(false);
    }
    data.next.length > 0 && refetechDataState(data.next);
  };
  // second button
  const handlePrevPokemons = () => {
    if (data.previous === null) {
      setIsDisabled((isDisabled) => !isDisabled);
      return;
    }
    data.previous.length > 0 && refetechDataState(data.previous);
  };

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div id="pokemons">
          {data &&
            data?.results?.map((value) => (
              <div key={value.name}>
                <PokeCard value={value} />
              </div>
            ))}
        </div>
        <div className={styles.buttonDiv} id="buttons">
          <Button
            text={"Render next pokmeons"}
            onButtonClicked={handleNextPokemons}
          />
          <Button
            disabled={isDisabled}
            text={"Render preview pokemons"}
            onButtonClicked={handlePrevPokemons}
          />
        </div>
      </main>
    </>
  );
};
