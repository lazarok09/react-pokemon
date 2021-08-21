import { useFetch } from "../../hooks/useFetch";
import { PokeCard } from "../../components/PokeCard";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export const Home = () => {
  const [data, refetchData, isLoading] = useFetch();
  // a função foi passada para um estado para não causar loops
  const [refetechDataState] = useState(() => refetchData);

  const [isDisabled, setIsDisabled] = useState(false);

  // realiza nova requisição com valores dinâmicos alterados via botão
  useEffect(() => {
    // limit faz a nossa requisição apresentar um número customizado de resultados
    let limit = "?offset=10&limit=10";

    refetechDataState("https://pokeapi.co/api/v2/pokemon" + limit);

    if (!isLoading && !!data.ok) {
      throw new Error("404");
    }
  }, [refetechDataState, isLoading, data.ok]);

  // primeiro botão  -
  const handleNextPokemons = () => {
    if (data.previous !== null) {
      setIsDisabled(false);
    }
    // dentro do *resultado da requisição armazenado no estado data* possui a chave .next que é a próxima requisição
    data.next.length > 0 && refetechDataState(data.next);
  };
  // second button
  const handlePrevPokemons = () => {
    /* o if seleciona o estado do botão para desativado caso não possua uma 
    requisição para voltar (no caso da primeira requisição mostrada em tela, não há previous no estado data) */
    if (data.previous === null) {
      setIsDisabled((isDisabled) => !isDisabled);
      return;
    }
    // dentro do *resultado da requisição armazenado no estado data* possui a chave .previous que foi a requisição anterior
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
            disabled={isDisabled}
            text={"Preview pokemons"}
            onButtonClicked={handlePrevPokemons}
          />
          <Button text={"Next pokmeons"} onButtonClicked={handleNextPokemons} />
        </div>
      </main>
    </>
  );
};
