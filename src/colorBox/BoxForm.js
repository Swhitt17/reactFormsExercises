import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const BoxForm = ({addBox}) => {
    const initialState = {
        color: '',
        height: '',
        width: ''
    }

    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id:uuid()});
        setFormData(initialState);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="color">Color</label>
            <input
            id="color"
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="height">Height</label>
            <input
            id="height"
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="width">Width</label>
            <input
            id="width"
            type="text"
            name="width"
            value={formData.width}
            onChange={handleChange}
            />
            </div>

            <button onClick={handleSubmit}>Submit</button>

        </form>
    )
}

export default BoxForm;