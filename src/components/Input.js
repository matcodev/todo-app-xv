import React, { useState } from 'react'

const InputToDo = (props) => {

    const initialToDo = {id: null, task: ''};
    const [task, setTask] = useState(initialToDo);

    const handlePressKey = (e) => {
        const { name, value } = e.target
        setTask({...task, [name]:value})
    }
    const onKeyUpValue = (e) => {
       
        if(e.key === 'Enter'){
         console.log(e.target.value)
         if(task.task.split(' ').join('') !== ''){
            props.addToDo(task)
            setTask(initialToDo)
        } 
        }
    }

    const sendTask = (e)=> {
        e.preventDefault()
        //const noValid = e.target.value.length !== '' ? true : false;
         // if(task.task.replace(/ /g,"") !== ''){
                // console.log(task.task)
    }
    return (
        <div className="row">
            <div className="text-center py-5">
                <h1>To Do App</h1>
            </div>
            <form onSubmit={sendTask}>
            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Any homework to do?"
                name="task"
                onChange={handlePressKey}
                onKeyUp={onKeyUpValue.bind(this)}
                value= {task.task}
                />
                {/* <button className="btn btn-primary mt-3">
                    Create
                </button> */}
            </form>    
        </div>
    );
}

export default InputToDo;