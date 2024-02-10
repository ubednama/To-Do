import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title and desc cant be empty")
        } else props.AddTodo(title, desc);
        setTitle("");
        setDesc("");
    }
  return (
    <div className='container my-3'>
        <form className='flex flex-row' onSubmit={submit}>
            <div className="mb-3">
                <h3>Add to-do</h3>
                <label htmlFor="title" className="form-label" >title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="add your todo"/>
                <label htmlFor="desc" className="form-label">desc</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" placeholder="describe your task here"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
  )
}
