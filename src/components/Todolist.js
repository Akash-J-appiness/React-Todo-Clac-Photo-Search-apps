import React from "react";


const TodoList = ({todos, setTodos, setEditTodo}) =>{

    const completeHandle = ({todo}) =>{
    setTodos(
        todos.map((item)=>{
        if(item.id === item.id) {
            return{...item, completed: !item.completed}
        }
        return item;
    })
    )
}

const editHandle = ({id}) =>{
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
}

    const deleteHandle = ({id}) =>{
setTodos(todos.filter((todo)=>todo.id !== id))
    }
    return(
        <div>
             {todos.map((todo)=> (
                <li className="todolist" key={todo.id} >
                    <input  className={'todlist ${todo.completed ? "complete" :"" }'} 
                    value={todo.title} 
                    onChange={(event) => event.preventDefault() } />
                    <button className="buttons" onClick={()=>{completeHandle(todo)}}>C</button>
                    <button className="buttons" onClick={()=>{editHandle(todo)}}>E</button>
                    <button className="buttons" onClick={()=>{deleteHandle(todo)}}>D</button>
                </li>
             ))
        } 
        </div>
    )
}

export default TodoList