import React, { useState } from "react";
import { ITodo } from "../../../model/todo.model";

const AddTodo: React.FC<{ addNewItem: (todo: ITodo) => void }> = (props) => {

    const [enteredLabel, setEnteredLabel] = useState<string>('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let newItem: ITodo = {
            id: Date.now().toString(),
            label: enteredLabel,
            status: "pending"
        }
        props.addNewItem(newItem)
    }

    const labelChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredLabel(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Enter Todo : </label>
            <input type="text" value={enteredLabel} onChange={labelChangeHandler} />
            <button>Add Item</button>
        </form>
    )
}

export default AddTodo;