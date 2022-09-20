import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

import styles from "./styles.module.css";

interface FormProps {
  onAddTodo: (description: string) => void;
}

export function Form({ onAddTodo }: FormProps) {
  const [description, setDescription] = useState("");

  function handleAddNewTodo() {
    onAddTodo(description);
    setDescription("");
  }

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        id="todo"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="button"
        className={styles.createButton}
        onClick={handleAddNewTodo}
      >
        Criar
        <BiPlusCircle color="#FFF" size={16} />
      </button>
    </div>
  );
}
