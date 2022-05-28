import {FormEvent, useState} from "react";

const TodoList = () => {
    const [todo, setTodo] = useState("");

    const onChange = (event: FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setTodo(value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={todo}
                    placeholder="White a to do"
                />
                <button>Add</button>
            </form>
        </div>
    );
};

export default TodoList;
