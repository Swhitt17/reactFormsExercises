import React,{useState} from "react";
import BoxForm from "./BoxForm";
import Box from "./Box";
import {v4 as uuid} from "uuid"

const BoxList = () => {

const [boxes,setBoxes] = useState([]);
const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id:uuid()}])
}

const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
}

return (
    <div>
        <h2>Color Boxes</h2>
        <BoxForm addBox={addBox}/>
        <div>
            {boxes.map( box => ( 
            <Box key={box.id} id={box.id} color={box.color} height={box.height} width={box.width} handleRemove={removeBox}/>))}
        </div> 
    </div>
)
}

export default BoxList;