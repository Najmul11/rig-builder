import { setUser } from "@/redux/slices/userSlice";
import store from "@/redux/store";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        store.dispatch(setUser(decodedToken));
      } catch (error) {
        console.error("Error decoding access token:", error);
      }
    }
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Toaster /> {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
