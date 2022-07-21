import React from "react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";

import { globalStyle } from "styles/Global";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Global styles={globalStyle} />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default App;
