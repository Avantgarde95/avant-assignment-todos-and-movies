import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

import Row from "todo/components/Row";
import { resetClickable, resetForm } from "styles/Mixins";
import { Todo, todosState } from "todo/states/Todo";

interface EditorProps {
  todoIndex: number;
  todo: Todo;
}

const Editor = ({ todoIndex, todo }: EditorProps) => {
  const setTodos = useSetRecoilState(todosState);
  const [isEditMode, setEditMode] = useState(false);
  const [input, setInput] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleInputKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setTodos(prevTodos => [
        ...prevTodos.slice(0, todoIndex),
        { ...todo, content: input },
        ...prevTodos.slice(todoIndex + 1),
      ]);

      setEditMode(false);
    }
  }

  function handleClickContent() {
    setTodos(prevTodos => [
      ...prevTodos.slice(0, todoIndex),
      { ...todo, isDone: !todo.isDone },
      ...prevTodos.slice(todoIndex + 1),
    ]);
  }

  function handleClickEdit() {
    setEditMode(true);
  }

  function handleClickDelete() {
    setTodos(prevTodos => [...prevTodos.slice(0, todoIndex), ...prevTodos.slice(todoIndex + 1)]);
  }

  return (
    <Container>
      {isEditMode ? (
        <Input type="text" value={input} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />
      ) : (
        <>
          <Content showStrike={todo.isDone} onClick={handleClickContent}>
            {todo.content}
          </Content>
          <Controls>
            <EditButton onClick={handleClickEdit}>수정</EditButton>
            <DeleteButton onClick={handleClickDelete}>삭제</DeleteButton>
          </Controls>
        </>
      )}
    </Container>
  );
};

const Container = styled(Row)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 6rem;
  padding: 1rem 2rem;

  &:hover {
    background-color: #f8f8f8;
  }
`;

interface ContentProps {
  showStrike: boolean;
}

const Content = styled.button<ContentProps>`
  ${resetClickable}

  text-align: left;

  width: 100%;
  height: 100%;
  padding: 0;
  flex: 1;

  ${({ showStrike }) => showStrike && "text-decoration: line-through;"}
`;

const Input = styled.input`
  ${resetForm}

  text-align: left;

  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0;
  border: 0;
  outline: 0;
`;

const Controls = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  ${resetClickable}

  margin-left: 1rem;
`;

const EditButton = styled(Button)`
  color: #9bb7ca;
`;

const DeleteButton = styled(Button)`
  color: #c2959b;
`;

export default Editor;
