import {useRecoilState, useRecoilValue} from "recoil";
import {Categories, categoryState, toDoSelector, toDoState} from "../atoms";
import CreateToDo from "./CreateToDo";
import Todo from "./Todo";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    width: 50vw;
`;

const Header = styled.h1`
    margin-top: 20px;
    text-align: center;
    font-weight: 800;
    font-size: 30px;
`;
const Seperation = styled.hr`
    margin: 20px 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const Selector = styled.select`
    width: 100%;
    padding: 10px 0px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;
const TodoList = () => {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    return (
        <Container>
            <Header>To Dos</Header>
            <Seperation />
            <CreateToDo />
            <Selector value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </Selector>
            <ul>
                {toDos.map((toDo) => (
                    <Todo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </Container>
    );
};

export default TodoList;
