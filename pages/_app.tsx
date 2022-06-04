import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import GlobalStyle from "src/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
