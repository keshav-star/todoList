import React from 'react'
import { useState } from 'react'

export const AddToDo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc ){
            alert("title or Description cannot be blank")
        }
        else{
            props.addTodo(title,desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className='container mt-4'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title of Todo</label>
                    <input type="text" className="form-control" id="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="Desc" />
                </div>

                <button type="submit" className="btn btn-success">Add To Todo List</button>
            </form>
        </div>
    )
}
