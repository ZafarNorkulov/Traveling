import { Provider } from "react-redux";
import "../styles/main.scss";
import { StrictMode, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { AppProps } from "next/app";



export default function App({ Component, pageProps }: {Component: AppProps, pageProps: any}) {
  const Layout = Component.layout;

  const [queryClient] = useState(() => new QueryClient());

  
  return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NextNProgress
            color="#8DD3BB"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Layout>
            <main className="bg-[#FAFBFC]">
              <Component {...pageProps} />
            </main>
          </Layout>
        </QueryClientProvider>
        </PersistGate>
      </Provider>
  );
}
