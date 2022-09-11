import "../public/assets/_css/style.css";
// import "../public/assets/plugins/slick/slick.min.css";
import "../public/assets/fonts/fontawesome-free/css/all.min.css";
// import "@fontsource/poppins";
import "@fontsource/baloo-bhai-2/800.css";
import "@fontsource/baloo-bhai-2/700.css";
import "@fontsource/baloo-bhai-2/600.css";
import "@fontsource/baloo-bhai-2/500.css";
import "@fontsource/baloo-bhai-2/400.css";

// import "../styles/globals.css";
import * as React from "react";
import PropTypes from "prop-types";

import { wrapper } from "../store/store";
import Router from "next/router";
// progress bar
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { AuthProvider } from "../components/auth/auth";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp(props) {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    import("jquery").then(($) => {
      window.$ = window.jQuery = $;
      import("../public/assets/_js/base.js");
      import("bootstrap");
    });
  }, []);
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
