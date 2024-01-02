import React, { useState, useEffect } from 'react';
import './App.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { LoadData, addData, deleteData } from './app-services/services';
function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
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
    await addData(newTodoTitle, newDescription);
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
            <label>Description:</label>
            <input
              type="text"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              placeholder="What's the description of your To Do?"
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
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}
          >
            To Do
          </button>
        </div>
        <div className="todo-list">

          {isCompletedScreen === false &&
            allTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

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

          {/* {isCompletedScreen === true &&
            completedTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i>Completed at: {item.completedOn}</i></p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleDeleteCompleted(index)}
                  />
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
