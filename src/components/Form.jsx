import React, {useEffect} from "react";
import uuid from 'react-uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title, id, completed} : todo
        )
        setTodos(newTodo)
        setEditTodo("")
    }

    useEffect(()=>{
        if (editTodo){
            setInput(editTodo.title)
        } else {
            setInput("")
        }    
    }, [setInput, editTodo ]
    )

    const onInputChange = (event) => {
 setInput(event.target.value)
}
 const onFormSubmit = (event) =>{
event.preventDefault()
if(!editTodo){
setTodos([...todos, {id: uuid(), title:input, completed:false}]);
setInput("");
} else {
    updateTodo(input, editTodo.id, editTodo.completed)
}
 };

    return (
        <form className="forms" onSubmit={onFormSubmit}>
            <input type="text" placeholder="enter a todo ..." className="input-form" 
            value={input} required onChange={onInputChange} />
            <button type="submit" className="button-add" >ADD</button>
        </form>
    )
}

export default Form