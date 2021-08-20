import styles from "./styles.module.css";
export const Button = ({ text, onButtonClicked }) => {
  return (
    <button className={styles.button} onClick={onButtonClicked}>
      {text}
    </button>
  );
};
