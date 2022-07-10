import "../styles/globals.css";

import "../public/assets/_css/style.css";
import "../public/assets/plugins/slick/slick.min.css";
import "../public/assets/fonts/fontawesome-free/css/all.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import * as React from "react";
import PropTypes from "prop-types";
import Script from "next/script";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
// import "../scss/custom.scss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    //import("slick-carousel")
    import("../public/assets/plugins/slick/slick.min.js");
    import("jquery").then(($) => {
      window.$ = window.jQuery = $;
      import("bootstrap");
      import("../public/assets/_js/slide.js");
      import("../public/assets/_js/base.js");
      import("../public/assets/_js/compare.js");
    });
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      {/* add script used in  */}

      {/* <Script src="assets/plugins/jquery/jquery.min.js"></Script>
      <Script src="assets/plugins/bootstrap/popper.min.js"></Script>
      <Script src="assets/plugins/bootstrap/bootstrap.min.js"></Script>
      <Script src="assets/plugins/slick/slick.min.js"></Script>
      <Script src="assets/_js/slide.js"></Script>
      <Script src="assets/_js/base.js"></Script>
      <Script src="assets/_js/compare.js"></Script> */}
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
