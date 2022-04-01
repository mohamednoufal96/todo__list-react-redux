import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import "../styles/TodoItem.css";

const TodoItem = ({ item, done, id }) => {
    const dispatch = useDispatch();
    const handleChecked = (e) => {
        dispatch(setCheck(id));
    };
    return (
        <div className="todoItem">
            <Checkbox checked={done} color="primary" onChange={handleChecked} inputProps={{ "aria-label": "controlled" }} />
            <p className={done && `todoItem--done`}>{item}</p>
        </div>
    );
};

export default TodoItem;
