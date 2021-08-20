import styles from "./styles.module.css";
export const Button = ({ text, onButtonClicked, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={onButtonClicked}
    >
      {text}
    </button>
  );
};
