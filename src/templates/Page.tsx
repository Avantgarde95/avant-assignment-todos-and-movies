import React, { ReactNode } from "react";
import styled from "@emotion/styled";

import Header from "templates/Header";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  flex: 1;

  background-color: #efefef;
`;

export default Page;
