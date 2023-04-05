import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        {/**
         * Globally defined svg linear gradient, for use in icons
         */}
      {/*  <svg height="0px" width="0px">*/}
      {/*    <defs>*/}
      {/*      <linearGradient*/}
      {/*        id="pink-gradient"*/}
      {/*        x1="0%"*/}
      {/*        y1="0%"*/}
      {/*        x2="100%"*/}
      {/*        y2="100%"*/}
      {/*      >*/}
      {/*        <stop offset="0%" stopColor="rgba(156, 81, 161, 1)" />*/}
      {/*        <stop offset="70%" stopColor="rgba(255, 30, 86, 1)" />*/}
      {/*      </linearGradient>*/}
      {/*    </defs>*/}
      {/*  </svg>*/}
      {/*</>*/}
      <Component {...pageProps} />
    </>
  );
}
