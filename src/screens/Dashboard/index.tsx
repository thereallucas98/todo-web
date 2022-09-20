import { useState } from "react";
import { EmptyList } from "../../components/EmptyList";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { TaskCounter } from "../../components/TasksCounter";
import { TodoItem } from "../../components/TodoItem";

import styles from "./styles.module.css";

interface ITodo {
  title: string;
  isDone: boolean;
}

export function Dashboard() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const doneTasks = todos.filter((todo) => todo.isDone);

  function handleCreateNewTodo(description: string) {
    const todoAlreadyExists = todos.filter(
      (todo) => todo.title === description
    );

    if (todoAlreadyExists) {
      const newTitle = window.prompt(
        "Opa. Encontramos uma tarefa com esse titulo já cadastrado. Insira uma nova descrição"
      );

      const todoToAdd = {
        title: newTitle ?? "",
        isDone: false,
      };

      setTodos((prevState) => [...prevState, todoToAdd]);
    } else {
      const todoToAdd = {
        title: description,
        isDone: false,
      };

      setTodos((prevState) => [...prevState, todoToAdd]);
    }
  }

  function handleUpdateTodo(idTitle: string) {
    const updateTodoTask = todos.map((todo) => {
      if (todo.title === idTitle) {
        todo.isDone = !todo.isDone;
      }

      return { ...todo };
    });

    setTodos(updateTodoTask);
  }

  function handleDeleteTodo(idTitle: string) {
    const filteredByTitle = todos.filter((todo) => todo.title !== idTitle);

    const answer = window.confirm("Você realmente quer deletar essa tarefa?");

    if (answer) {
      setTodos(filteredByTitle);
      return;
    }
  }

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Form onAddTodo={handleCreateNewTodo} />
        <TaskCounter
          amountOfTasks={todos.length}
          amountOfDone={doneTasks.length}
        />
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.title}
              data={todo}
              onUpdateTodo={handleUpdateTodo}
              onRemoveTask={handleDeleteTodo}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </main>
    </div>
  );
}
