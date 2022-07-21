import React from "react";
import styled from "@emotion/styled";

import Link from "components/Link";
import { inner, resetClickable, shadowEffect } from "styles/Mixins";

const Header = () => (
  <Container>
    <Content>
      <Title>프로그라피 프론트 Avantgarde95</Title>
      <Controls>
        <HeaderLink href="/">투두리스트</HeaderLink>
        <HeaderLink href="/movie">영화</HeaderLink>
        <HeaderLink
          href="https://github.com/Avantgarde95/avant-todos-and-movies"
          target="_blank"
          rel="noreferrer noopener"
        >
          코드
        </HeaderLink>
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
  padding: 2.5rem 1rem 2rem 1rem;

  background-color: #ffffff;
`;

const Content = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  ${inner}
`;

const Title = styled.h1`
  width: 100%;
  flex: 1;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #696969;
`;

const Controls = styled.div``;

const HeaderLink = styled(Link)`
  ${resetClickable}

  font-size: 1.5rem;
  color: #8d8d8d;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

export default Header;
