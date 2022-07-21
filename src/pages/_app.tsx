import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { globalStyle } from "styles/Global";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  const isDevelopmentMode = process.env.NODE_ENV === "development";

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {isDevelopmentMode && <ReactQueryDevtools initialIsOpen={false} />}
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
