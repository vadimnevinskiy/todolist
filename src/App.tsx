import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {TodoForm} from "./components/TodoForm/TodoForm";
import {TodoList} from "./components/TodoList/TodoList";
import {ITodo} from "./interfaces";

function App() {
    const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (title: string) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <TodoForm onAdd={addHandler} />
                <TodoList todos={todos} />
            </div>
        </div>
    );
}

export default App;
