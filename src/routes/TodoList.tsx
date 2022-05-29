import {useForm} from "react-hook-form";
import {atom, useRecoilState} from "recoil";

interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}
interface IForm {
    toDo: string;
}

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

const TodoList = () => {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        setToDos((prev) => [
            {text: toDo, id: Date.now(), category: "TO_DO"},
            ...prev,
        ]);
        setValue("toDo", "");
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo")} placeholder="Write a To Do" />
                <button>Add Todo</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
