import { Provider } from "react-redux";
import "../styles/main.scss";
import store from "../redux/store";
import { StrictMode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App({ Component, pageProps }: any) {
  const Layout = Component.layout;

  const [queryClient] = useState(() => new QueryClient());
  return (
    <StrictMode>
      <Provider store={store}>
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
      </Provider>
    </StrictMode>
  );
}
