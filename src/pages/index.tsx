import React from "react";
import styled from "@emotion/styled";

import Page from "templates/Page";
import Table from "todo/templates/Table";

const HomePage = () => (
  <Page>
    <Container>
      <Title>Todos</Title>
      <Table />
    </Container>
  </Page>
);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-top: 6rem;
`;

const Title = styled.div`
  font-size: 4rem;
  color: #a33e58;
`;

export default HomePage;
