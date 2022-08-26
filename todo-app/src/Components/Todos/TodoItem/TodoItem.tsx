import React from 'react';
import { ITodo } from '../../../model/todo.model';

const TodoItem: React.FC<{ todo: ITodo }> = (props) => {


    return (
        <div>
            <h6>{props.todo.label}</h6>
        </div>
    )

}

export default TodoItem;