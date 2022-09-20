import styles from "./styles.module.css";

interface TaskCounterProps {
  amountOfTasks: number;
  amountOfDone: number;
}

export function TaskCounter({ amountOfDone, amountOfTasks }: TaskCounterProps) {
  return (
    <div className={styles.row}>
      <div className={styles.counterItem}>
        <strong>Tarefas Criadas</strong>{" "}
        <div className={styles.counterContent}>
          <span>{amountOfTasks}</span>
        </div>
      </div>
      <div className={styles.counterItem}>
        <strong>Concluídas</strong>{" "}
        <div className={styles.counterContent}>
          <span>{amountOfDone} de {amountOfTasks}</span>
        </div>
      </div>
    </div>
  );
}
