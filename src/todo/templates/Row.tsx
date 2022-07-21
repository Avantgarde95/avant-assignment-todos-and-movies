import React from "react";
import styled from "@emotion/styled";

const Row = () => <Container>Hello</Container>;

const Container = styled.div`
  box-sizing: border-box;

  width: 50rem;
  min-height: 5rem;
  padding: 2rem;
  font-size: 2rem;
  color: #989898;

  &:not(:first-of-type) {
    border-top: 1px solid #efefef;
  }
`;

export default Row;
