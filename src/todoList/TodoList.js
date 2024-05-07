import React,{useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import {v4 as uuid} from "uuid"

const TodoList = () => {

const [todos,setTodos] = useState([]);
const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id:uuid()}])
}

const removeTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
}

return (
    <div>
        <h2>Todo List</h2>
        <NewTodoForm addTodo={addTodo}/>
        <div>
            {todos.map( todo => ( 
            <Todo key={todo.id} id={todo.id} task={todo.task} handleRemove={removeTodo}/>))}
        </div> 
    </div>
)
}

export default TodoList;