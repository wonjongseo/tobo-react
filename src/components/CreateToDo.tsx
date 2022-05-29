import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from "../atoms";
import styled from "styled-components";
interface IForm {
    toDo: string;
}

const Form = styled.form`
    input {
        width: 80%;
        padding: 10px 0px;
    }
    button {
        width: 20%;
        padding: 10px 0px;
    }
    border-radius: 10px;
    margin-bottom: 20px;
`;

const CreateToDo = () => {
    const setToDos = useSetRecoilState(toDoState);
    const {handleSubmit, register, setValue} = useForm<IForm>();
    const category = useRecoilValue(categoryState);
    const handleValid = ({toDo}: IForm) => {
        setToDos((prev) => [{text: toDo, id: Date.now(), category}, ...prev]);
        setValue("toDo", "");
    };
    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo")} placeholder="Write a To Do" />
            <button>Add</button>
        </Form>
    );
};

export default CreateToDo;
