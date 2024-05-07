import React from "react";
import {render, fireEvent} from "@testing-library/react"
import BoxList from "./BoxList";

function addBox(boxList,height = "4", width = "4", color="springGreen"){
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const colorInput = boxList.getByLabelText("Color");
    fireEvent.change(heightInput, {target: {value: height}});
    fireEvent.change(widthInput, {target: {value: width}});
    fireEvent.change(colorInput, {target: {value: color}});
     const btn = boxList.queryByText("Submit");
     fireEvent.click(btn);
}

test("it renders without crashing", () => {
    render(<BoxList />);
});

test("it matches snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

test("it should add a new box", () => {
   const boxList = render(<BoxList />);
   expect(boxList.queryByText("X")).not.toBeInTheDocument();
   addBox(boxList);

   const removeBtn = boxList.getByText("X");
   expect(removeBtn).toBeInTheDocument();
   expect(removeBtn.previousSibling).toHaveStyle(
    `height: 4em;
    width: 4em;
    background-color: springGreen;
    `)

    expect(BoxList.getAllByDisplayValue("")).toHaveLength(3);

   expect(queryByText)
});

test("it should remove a box", () => {
    const boxList = render(<BoxList />);
    addBox(boxList);
 
    const removeBtn = boxList.getByText("X");
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
 });