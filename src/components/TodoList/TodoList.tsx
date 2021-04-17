import React from "react";
import {ITodo} from "../../interfaces";

type TodoListProps = {
    todos: ITodo[]
    onRemove: (id: number) => void
    onToggle: (id: number) => void
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({todos, onRemove, onToggle}) => {

    if(todos.length === 0){
        return (
            <div className="center">
                Нет записей
            </div>
        )
    }

    const removeHandler = (id: number) => {
        onRemove(id)
    }

    const toggleHandler = (id: number) => {
        onToggle(id)
    }

    return (
        <ul className="">
            {
                todos.map(item => {
                    const classes = ['todo']

                    if(item.completed){

                        classes.push('completed')
                    }
                    return (
                        <li className={classes.join(' ')} key={item.id}>
                            <label>
                                <input type="checkbox" checked={item.completed} onChange={event=> toggleHandler(item.id)}/>
                                <span>{item.title}</span>
                                <i
                                    className="material-icons red-text"
                                    onClick={event=> removeHandler(item.id)}
                                >delete</i>
                            </label>
                        </li>
                    )
                })
            }

        </ul>
    )
}
