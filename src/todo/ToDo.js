import React, { useState } from 'react';

const ToDo = () => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const _handleChange = (e) => {
    setInputValue(e.target.value);
  }


  const _handleSubmit = (e)=> {
    e.preventDefault();
    if (inputValue === '') {
      alert('Please enter a task');
    } else {
      setTodos([...todos, { text: inputValue, isChecked: false }]);
      setInputValue('');
    }
  }


  const _handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const _handleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].isChecked = !newTodos[index].isChecked;
    setTodos(newTodos);
  }

  const _handleRemoveAll = () => {
    setTodos([]);
  };

  return (
    <>
    <div className='Main_div'>
      <h1>My Daily To Do list</h1>

      <form onSubmit={_handleSubmit}>

        <div className='Text_div'>
        <input type="text" className='Text' value={inputValue}  onChange={_handleChange} placeholder='Enter Your Task'/> 
        <button onClick={_handleSubmit}  className='Add_btn'>Add Task</button>
        </div>
      </form>
</div>
<h3> Today's Total task : {todos.length}</h3>
      <div className='List_div'>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.isChecked ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.isChecked} onChange={() => _handleCheck(index)}/>
            <span className='w-100 ms-2 overflow-x-hidden'>{todo.text}</span>
           <div> <button onClick={() => _handleDelete(index)} className='Del_btn'>Remove</button></div>
            </li> 
        ))} 
         {todos.length > 1 && (
        <div>
          <button onClick={_handleRemoveAll} className='RemoveAll_btn'>Remove All</button>
        </div>
      )}
      </ul>
      </div>

     
      </>
  );
}

export default ToDo;
