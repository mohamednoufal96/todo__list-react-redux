import React from "react";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

import "./App.css";

function App() {
    const todoList = useSelector(selectTodoList);

    return (
        <div className="app">
            <div className="app__container">
                <div className="app__todoContainer">
                    {todoList.map(({ item, id, done }) => {
                        return <TodoItem key={id} item={item} done={done} id={id} />;
                    })}
                </div>
                <Input />
            </div>
        </div>
    );
}

export default App;
