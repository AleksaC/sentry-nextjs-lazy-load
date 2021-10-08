import { FC } from "react";
import { AppProps } from "next/app";
import SentryScript from "@components/sentry";

const App: FC<AppProps & { err: Error | null }> = ({
  Component,
  pageProps,
  err,
}) => {
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return (
    <>
      <Component {...pageProps} err={err} />
      <SentryScript />
    </>
  );
};

export default App;
