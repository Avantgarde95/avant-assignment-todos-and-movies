import React from "react";
import styled from "@emotion/styled";

import { inner, resetClickable, shadowEffect } from "styles/Mixins";

const Header = () => (
  <Container>
    <Content>
      <Title>프로그라피 프론트 Avantgarde95</Title>
      <Controls>
        <Button>Todo</Button>
        <Button>영화</Button>
      </Controls>
    </Content>
  </Container>
);

const Container = styled.header`
  ${shadowEffect}

  // Put this at top of the stack to prevent the sibling from hiding box-shadow.
  // https://stackoverflow.com/questions/31276634/box-shadow-over-next-sibling-div
  position: relative;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  padding: 2.5rem 0 2rem 0;

  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${inner}
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #696969;
`;

const Controls = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  ${resetClickable}

  font-size: 1.5rem;
  color: #8d8d8d;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

export default Header;
