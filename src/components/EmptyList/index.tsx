import styles from "./styles.module.css";

export function EmptyList() {
  return (
    <div className={styles.emptyContent}>
      <img
        src="/icons/clipboard.svg"
        alt="Bloco de Notas Vazio"
      />

      <span className={styles.emptyText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  );
}
