import React from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";

import { todosState } from "todo/states/Todo";
import Creator from "todo/templates/Creator";
import Editor from "todo/templates/Editor";
import { shadowEffect } from "styles/Mixins";

const Table = () => {
  const todos = useRecoilValue(todosState);

  return (
    <Container>
      <Creator />
      {todos.map((todo, index) => (
        <Editor key={index} todoIndex={index} todo={todo} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  ${shadowEffect}

  width: 50rem;
  max-width: 100%;
  margin: 2rem;
  background-color: #ffffff;
`;

export default Table;
