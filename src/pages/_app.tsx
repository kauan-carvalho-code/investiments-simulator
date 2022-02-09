import type { AppProps } from "next/app";
import { SimulatorProvider } from "../hooks/useSimulator";
import GlobalStyle from "../styles/global";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <SimulatorProvider>
        <Component {...pageProps} />
      </SimulatorProvider>
    </Theme>
  );
}

export default MyApp;
