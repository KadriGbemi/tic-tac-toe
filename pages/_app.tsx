import { GameProvider } from "../contexts/game";

import type { AppProps } from "next/app";

import "../styles/main.scss";
import "../styles/form.scss";
import "../styles/history.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}
