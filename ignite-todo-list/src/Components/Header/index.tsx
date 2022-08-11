import styles from "./Header.module.css";


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.h1}>
        Lista de Tarefa
      </h1>

    </header>
  );
}
