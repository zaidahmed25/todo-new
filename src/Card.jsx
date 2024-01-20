import React, { useState , useRef} from 'react'

const Card = ({title , deleteTodo , editTodo , index}) => {

    const [showTodo, setShowTodo] = useState(true);  
    const editedValue = useRef();

    function saveTodo() {
        editTodo(index, editedValue.current.value);
        setShowTodo(true);
    }

  return (
    <>
    <div style={{margin:'40px'}}>
    {showTodo ? <div>
        <h4>{title}</h4>
        <button onClick={()=> setShowTodo(false)}>Edit</button>
        <button onClick={() => deleteTodo (index)}>Delete</button>
    </div> : <div>
        <input type="text" placeholder='add new todo' ref={editedValue}/>
        <button onClick={saveTodo}>Save</button>
    </div> }
    </div> 
    </>
  )
}

export default Card