import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "@/store/AuthContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import pageDontNeedNavigation from "../helpers/pageDontNeedNavigation";
import pageDontNeedFooter from "../helpers/pageDontNeedFooter";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dontNeedNav = pageDontNeedNavigation(router);
  const dontNeedFooter = pageDontNeedFooter(router);

  if (dontNeedNav && dontNeedFooter) {
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    );
  }

  if (dontNeedNav) {
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    );
  }
  if (dontNeedFooter) {
    return (
      <AuthContextProvider>
        <Navigation />
        <Component {...pageProps} />
      </AuthContextProvider>
    );
  }

  return (
    <AuthContextProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </AuthContextProvider>
  );
}

export default MyApp;
