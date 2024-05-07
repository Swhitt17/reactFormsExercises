import React from "react";

const Todo = ({id,task,handleRemove}) => {

    const removeTodo = () => handleRemove(id);
 

    return(
        <div>
            <ul>
                <li>{task} <button onClick={removeTodo}>X</button> </li>
               
            </ul>
        </div>
    );

}

export default Todo;