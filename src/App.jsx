import { useState, useReducer } from "react";
import "./App.css";
import Todo from "./Todo";

export const ACTIONS = {
  AD_TODO: "ad-todo",
  TOGGLE_TODO: "toogle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.AD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.AD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div>
         <h1>MAKE YOUR TODO LIST</h1>

    <div className="con">
    
     
        <form onSubmit={handleSubmit}>
          <input className="inp" placeholder="Enter your todo here"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button>Add</button>
        </form>
        {todos.map((todo) => {
          return <Todo  key={todo.id} todo={todo}   dispatch={dispatch} />;
        })}

    </div>
    </div>
  );
}

export default App;
