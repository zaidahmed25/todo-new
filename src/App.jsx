import React, { useRef, useState, } from 'react'
import Card from './Card';
import Navbar from './components/Navbar';
import Check from './components/Check';

const App = () => {

  const todoVAl = useRef();
  const [data , setdata] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(todoVAl.current.value);
    data.push(todoVAl.current.value);
    setdata([...data]);
    todoVAl.current.value = ''
  }

  const deleteTodo = (index) => {
    console.log('deleteTodo' , index);
    data.splice(index, 1);
    setdata([...data]);
  }

  const editTodo = (index, value) => {
    console.log('editTodo' , value);
    data.splice(index, 1 , value);
    setdata([...data]);
  }


  return (
    <>
        <Navbar />
        {/* <Check title='Hello World' /> */}
        <Check>Hello World</Check>
        <h1>Todo App</h1>
        <form onSubmit={addTodo}>
          <input type="text" ref={todoVAl} placeholder='Enter Todo' />
          <button type="submit">AddTodo</button>
        </form>
        {data.length > 0 ? data.map((item, index)=>{
          return <Card key={index} title={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
        }) : <h1>No Todo Found...</h1>}

    </>
  )
}

export default App