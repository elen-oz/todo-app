import { useState } from "react";
import "./ListSection.css";

function ListSection() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className='listSection'>
      <h1>My TODO List</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
        />
        <button type='submit' onClick={addTodo}>
          Add to do
        </button>
      </form>

      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <p className='element' key='element'>{todo}</p>
      ))}
    </div>
  );
}

export default ListSection;
