import React, { useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { css, Global } from "@emotion/react";

interface Data {
  data: {
    movies: Array<{ title: string }>;
  };
}

const Table = () => {
  const { data, isLoading } = useQuery<Data>(["movies"], downloadMovies);
  const [modalContainer, setModalContainer] = useState<Element | null>(null);

  const movies = data?.data.movies;

  useEffect(() => {
    setModalContainer(document.querySelector(".modalContainer"));
  }, []);

  return (
    <Container>
      {movies && movies.map((movie, index) => <Movie key={`${movie.title}-${index}`}>{movie.title}</Movie>)}
      {isLoading &&
        modalContainer &&
        createPortal(
          <>
            <Global styles={injectStyle} />
            <Loading>Loading...</Loading>
          </>,
          modalContainer
        )}
    </Container>
  );
};

async function downloadMovies() {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json?limit=50", { method: "GET" });
  return await response.json();
}

const Container = styled.div`
  color: #979797;
`;

const Movie = styled.div`
  text-align: center;

  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const injectStyle = css`
  .modalContainer {
    display: block;
  }
`;

const Loading = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  font-size: 3rem;
  color: #ffffff;
  background-color: #a5a5a5dd;
`;

export default Table;
