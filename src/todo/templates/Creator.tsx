import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

import { todosState } from "todo/states/Todo";
import Row from "todo/components/Row";
import { resetForm } from "styles/Mixins";

const Creator = () => {
  const [input, setInput] = useState("");
  const setTodos = useSetRecoilState(todosState);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setTodos(prevTodos => [...prevTodos, { content: input, isDone: false }]);
      setInput("");
    }
  }

  return (
    <Row>
      <Input type="text" placeholder="무엇을 해야하나요?" value={input} onChange={handleChange} onKeyUp={handleKeyUp} />
    </Row>
  );
};

const Input = styled.input`
  ${resetForm};

  width: 100%;
  height: 8rem;
  padding: 2rem;
  border: 0;
  outline: 0;
  color: inherit;
`;

export default Creator;
