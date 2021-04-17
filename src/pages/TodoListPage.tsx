import React, {useState} from "react";
import {TodoForm} from "../components/TodoForm/TodoForm";
import {TodoList} from "../components/TodoList/TodoList";
import {ITodo} from "../interfaces";

export const TodoListPage: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (title: string) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {

            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        }))
    }

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </>
    )
}
