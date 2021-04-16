import React from "react";
import {ITodo} from "../../interfaces";

type TodoListProps = {
    todos: ITodo[]
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({todos}) => {

    if(todos.length === 0){
        return (
            <div className="center">
                Нет записей
            </div>
        )
    }

    return (
        <ul className="">
            {
                todos.map(item => {
                    return (
                        <li className="todo" key={item.id}>
                            <label>
                                <input type="checkbox"/>
                                <span>{item.title}</span>
                                <i className="material-icons red-text">delete</i>
                            </label>
                        </li>
                    )
                })
            }

        </ul>
    )
}
