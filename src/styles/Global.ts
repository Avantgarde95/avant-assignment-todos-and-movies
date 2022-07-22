import { css } from "@emotion/react";

export const globalStyle = css`
  html {
     width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: "Noto Sans KR", sans-serif;
    font-size: 62.5%;
  }

  body {
    position: relative;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  .modalContainer {
    position: absolute;
    display: none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
