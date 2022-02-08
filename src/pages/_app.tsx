import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
