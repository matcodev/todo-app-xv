import React, { useState } from 'react'
import InputToDo from "./components/Input";
import ToDoTable from './components/ToDoTable';

function App() {

  const toDoData = [
    {id: 1, task: 'Codear'},
    {id: 2, task: 'Cocinar'},
    {id: 3, task: 'Barrer'}
  ]
  const [toDo, setToDo] = useState(toDoData);

  const addToDo = (newToDo) => {
    newToDo.id = toDo.length + 1
    setToDo([
      ...toDo,
      newToDo
    ])
  }
  
  const deleteToDo = (id) => {
    setToDo(toDo.filter((toDo) => toDo.id !== id))
  }

  return (
    <div className="container">
      <InputToDo 
        addToDo={addToDo}
      />
      <hr className="text-danger my-4"/>
      <ToDoTable 
        toDo={toDo}
        deleteToDo={deleteToDo}
      />
    </div>
  );
}

export default App;
