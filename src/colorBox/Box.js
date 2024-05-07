import React from "react";

const Box = ({id,color,height,width,handleRemove}) => {

    const removeBox = () => handleRemove(id);
 

    return(
        <div>
        <div 
        style={{backgroundColor: `${color}`, height: `${height}em`, width: `${width}em`}}>
            <button onClick={removeBox}>X</button>
        </div>
        </div>
    );

}

export default Box;