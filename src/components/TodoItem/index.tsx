import { BiTrash } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./styles.module.css";

interface TodoItem {
  title: string;
  isDone: boolean;
}

interface TodoItemProps {
  onUpdateTodo: (title: string) => void;
  onRemoveTask: (title: string) => void;
  data: TodoItem;
}

export function TodoItem({ data, onUpdateTodo, onRemoveTask }: TodoItemProps) {
  function handleUpdateTodoTask(title: string) {
    onUpdateTodo(title);
  }

  function handleDeleteTodoTask(title: string) {
    onRemoveTask(title);
  }

  return (
    <div className={styles.todoItem}>
      <button
        className={styles.checkButton}
        type="button"
        onClick={() => handleUpdateTodoTask(data.title)}
      >
        {data.isDone ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <span className={data.isDone ? styles.checked : ""}>{data.title}</span>
      <button
        className={styles.deleteButton}
        type="button"
        title="Remover tarefa"
        onClick={() => handleDeleteTodoTask(data.title)}
      >
        <BiTrash color="#808080" size={14} />
      </button>
    </div>
  );
}
