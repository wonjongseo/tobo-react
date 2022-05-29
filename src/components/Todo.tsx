import {IToDo, toDoState} from "../atoms";
import styled from "styled-components";
import {useSetRecoilState} from "recoil";
import React from "react";

const Item = styled.li``;
const Text = styled.span`
    margin-right: 20px;
`;

const Todo = ({text, category, id}: IToDo) => {
    const setToDo = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event;
        setToDo((oldTodos) => {
            const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
            const newTodo = {text, id, category: name as any};
            return [
                ...oldTodos.slice(0, targetIndex),
                newTodo,
                ...oldTodos.slice(targetIndex + 1),
            ];
        });
    };
    return (
        <Item>
            <Text>{text}</Text>
            {category !== "TO_DO" && (
                <button name="TO_DO" onClick={onClick}>
                    To do
                </button>
            )}
            {category !== "DOING" && (
                <button name="DOING" onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== "DONE" && (
                <button name="DONE" onClick={onClick}>
                    Done
                </button>
            )}
        </Item>
    );
};

export default Todo;
