import React from "react";
import styled from "@emotion/styled";

import Row from "todo/templates/Row";
import { shadowEffect } from "styles/Mixins";

const Table = () => (
  <Container>
    <Row />
  </Container>
);

const Container = styled.div`
  ${shadowEffect}

  margin-top: 2rem;
  background-color: #ffffff;
`;

export default Table;
