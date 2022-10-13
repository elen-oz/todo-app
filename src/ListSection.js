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
    <div>
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

        <div className='listSection_list'>
          <h2 className='listSection_title'>List of Todos</h2>
          <div className='listSection_elements'>
            <ol className='listSection_ol'>
              {todos.map((todo) => (
                <li className='element' key='element'>
                  {todo}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSection;
