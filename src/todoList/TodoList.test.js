import React from "react";
import {render, fireEvent} from "@testing-library/react"
import TodoList from "./TodoList";

function addTodo(todoList,task = "Wash Dishes"){
    const input = todoList.getByLabelText("Task");
    fireEvent.change(input, {target: {value: task}});
     const btn = todoList.getByText("Submit");
     fireEvent.click(btn);
}

test("it renders without crashing", () => {
    render(<TodoList />);
});

test("it matches snapshot", () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


test("it add new todo", () => {
    const list = render(<TodoList />);
    addTodo(list);
    expect(list.getByText('Wash Dishes')).toBeInTheDocument();
   
});
