import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a className={styles.a} href="#pokemons">
          Pokemons
        </a>
        <a className={styles.a} href="#buttons">
          Buttons
        </a>
        <a
          className={styles.a}
          target="__blank"
          href="https://github.com/lazarok09/react-pokemon"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};
