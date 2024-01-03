import React, { useState, useEffect } from 'react';
import './App.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { LoadData, addData, deleteData } from './app-services/services';
function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await LoadData();
    if (data) {
      setAllTodos(data.data);
      console.log(data.data)
    }
  }

  const handleAddData = async () => {
    await addData(newTodoTitle);
    await fetchData();
  }

  const handleDelete = async (id) => {
    await deleteData(id);
    await fetchData();
  }

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">

        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newTodoTitle}
              onChange={e => setNewTodoTitle(e.target.value)}
              placeholder="What's the title of your To Do?"
            />
          </div>
          
          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddData}
            >
              Add
            </button>
          </div>
        </div>
        
        <div className="todo-list">

          {isCompletedScreen === false &&
            allTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.content}</h3>
                </div>
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default App;
