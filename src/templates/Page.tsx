import React, { ReactNode } from "react";
import styled from "@emotion/styled";

import Header from "templates/Header";

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => (
  <Container>
    <Header />
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </Container>
);

const Container = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: #efefef;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: 6rem;
`;

const Title = styled.div`
  font-size: 4rem;
  color: #a33e58;
`;

export default Page;
