import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
  const [title, setTitle] = useState( "" );
  const [desc, setDesc] = useState( "" );
  const submit = (e) =>{
    e.preventDefault(); //this help to make a without reload making page.
    if(!title || !desc){
      alert("Title or Description can't be Blank");
    }
    else{
      addTodo(title, desc);
      // setTitle = " ";
      // setDesc = " ";
    }
  }
  return (
    <div className='container'>
        <h3>Add a Todo</h3>
      <form onSubmit = {submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="text-aria"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-success btn-sm" >Add Todo</button>
</form>
    </div>
  )
}
