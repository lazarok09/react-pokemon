import styles from "./styles.module.css";
export const PokeCard = ({ value }) => {
  return (
    <div className={styles.div}>
      <p className={styles.p}>{value.name}</p>
    </div>
  );
};
