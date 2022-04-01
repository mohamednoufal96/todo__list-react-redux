import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import "../styles/Input.css";

const Input = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const addTodo = () => {
        console.log("adding todo : ", input);

        dispatch(
            saveTodo({
                item: input,
                done: false,
                id: Date.now(),
            })
        );
        setInput("");
    };
    return (
        <div className="input">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};

export default Input;
