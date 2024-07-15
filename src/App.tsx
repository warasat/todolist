import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1 className="text-purple-600 text-5xl px-96 py-8 text-center">
        TODO REACT + TYPESCRIPT
      </h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
