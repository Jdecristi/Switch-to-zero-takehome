import "@/styles/theme.scss";

import { Lexend } from "next/font/google";
import SSRProvider from "react-bootstrap/SSRProvider";
import type { AppProps } from "next/app";
import Header from "@/layouts/Header";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <main className={lexend.className}>
        <Header>
          <Component {...pageProps} />
        </Header>
      </main>
    </SSRProvider>
  );
}
