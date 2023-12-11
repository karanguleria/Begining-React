"use client"
import '../app/reset.css';
import '../app/AppOrignal.css';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "wake up early",
      isComplet: true
    },
    {
      id:2,
      title: "Learn something new",
      isComplet: false
    },
    {
      id:3,
      title: "work for the health",
      isComplet: false
    }
  ])
  
  const [todoTile, setTodoTitle] = useState("")
  const [todoId, setTodoId] = useState(4)

  function handleSubmit(){
    event?.preventDefault()
    if(todoTile.trim().length === 0 ){
      return;
    }
    setTodos([...todos,{
      id:todoId,
      title: todoTile,
      isComplet:false
    }])
    setTodoId(prevTodoId => prevTodoId + 1 )
    setTodoTitle("")
  }

  function handleChange (event:any){
    setTodoTitle(event.target.value)
  }
  function deleteTodo(id: number){
    setTodos([...todos].filter(todo => todo.id !== id))
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoTile}
            onChange={handleChange}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          { todos.map((todo,index) =>
          <li className="todo-item-container" key={index}>
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">{todo.title}</span>
              {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
            </div>
            <button className="x-button" onClick={() => deleteTodo(todo.id)}>
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
         )}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;