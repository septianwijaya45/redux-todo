import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (id) => {
    dispatch(RemoveTodoAction(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List Milos</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 500,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  type="button"
                  style={{
                    padding: 10,
                    borderRadius: 25,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => {
                    removeHandler(t);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
