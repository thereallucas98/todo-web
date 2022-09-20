import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <img src="/assets/logo.png" alt="Todo" />
    </div>
  );
}