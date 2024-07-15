import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  console.log("~file: todos.tsx:10 ~ Todos ~ todosData:", todosData);

  let filterData = todos;
  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <div>
      <ul className="text-center m-10 divide-y divide-solid ">
        {filterData.map((todo) => {
          return (
            <li className="h-16 py-8 " key={todo.id}>
              <input
                className="m-10  "
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />

              <label className={todo.completed ? 'line-through' : ''} htmlFor={`todo-${todo.id}`}>
                {" "}
                {todo.task}{" "}
              </label>

              {todo.completed && (
                <button
                  className="bg-red-800 text-white m-10"
                  type="button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos;
