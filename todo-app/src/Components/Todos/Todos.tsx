import { useState } from 'react';
import { ITodo } from '../../model/todo.model';
import AddTodo from './AddTodo/AddTodo';
import TodoItem from './TodoItem/TodoItem';

const Todos = () => {



    // const todos: Array<ITodo> = [
    //     { id: "t001", label: "renew car insurance", status: "pending" },
    //     { id: "t002", label: "pot the plants", status: "completed" }
    // ]

    const [todos, setTodos] = useState<Array<ITodo>>([])

    const addNewItem = (todo: ITodo) => {
        setTodos((prevTodos) => [todo, ...prevTodos])
    }

    return (
        <>
            <h1>The Awesome Todo App</h1>
            <AddTodo addNewItem={addNewItem} />
            <ul>
                {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
            </ul>
        </>
    )
}

export default Todos;