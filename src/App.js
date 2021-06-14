import React, { useState } from 'react'
import InputToDo from "./components/InputToDo";
import ToDoTable from './components/ToDoTable';

function App() {

  const toDoData = [
    {id: 1, task: 'Codear'},
    {id: 2, task: 'Cocinar'},
    {id: 3, task: 'Barrer'}
  ]
  const [toDo, setToDo] = useState(toDoData);
  
  const addToDo = (newToDo) => {
    const id = toDo.length > 0 ? (toDo[toDo.length - 1].id) + 1 : 1;
    const taskFinal = {...newToDo, id : id}
    console.log(taskFinal)
    setToDo([
      ...toDo,
      taskFinal
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
