import { Provider } from "react-redux";
import "../styles/main.scss";
import store from "../redux/store";
import { StrictMode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar"
export default function App({ Component, pageProps }: any) {




  const Layout = Component.layout;
  return (
    <StrictMode>
      <Provider store={store}>
             <NextNProgress color="#8DD3BB"  startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
        <Layout>
          <main className="bg-[#FAFBFC]">
            <Component {...pageProps} />
          </main>
        </Layout>
        
      </Provider>
    </StrictMode>
  );
}
