import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }

    return (
        <div className="input-field mt2">
            <input
                id="title"
                type="text"
                ref={ref}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title">Введите название</label>
        </div>
    )
}
