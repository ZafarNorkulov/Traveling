import { Provider } from "react-redux";
import "../styles/main.scss";
import store from "../redux/store";
import { StrictMode } from "react";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.layout;
  return (
    <StrictMode>
    <Provider store={store}>
      <Layout>
        <main className="bg-[#FAFBFC]">

        <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
    </StrictMode>
  );
}
