import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderprops = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdSAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);
export const TodosProvider = ({ children }: TodosProviderprops) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (error) {
      return [];
    }
  });
  const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdSAt: new Date(),
        },
        ...prev,
      ];
      //  console.log('My Previous '+ prev)
      //  console.log(newTodos);
      return newTodos;
    });
  };
  // toggle completed
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  };

  // delete the indvidual data
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};
//consumer

export const useTodos = () => {
  const todosconsumer = useContext(todosContext);
  if (!todosconsumer) {
    throw new Error(" useTodos used outside of Provider ");
  }
  return todosconsumer;
};
