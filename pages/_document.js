import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500;600;700&family=Baloo+Tammudu+2&family=Dosis:wght@200;400;500;600&family=Edu+TAS+Beginner:wght@600;700&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap"
            rel="stylesheet"
          />
          {/* <Script src="/assets/plugins/jquery/jquery.min.js async"></Script>
          <Script src="/assets/plugins/jquery/jquery.form.min.js async"></Script>
          <Script src="/assets/plugins/bootstrap/popper.min.js async"></Script>
          <Script src="/assets/plugins/bootstrap/bootstrap.min.js async"></Script>
          <Script src="/assets/plugins/bootstrap/bootstrap-notify.min.js async"></Script>
          <Script src="/assets/plugins/sweetalert/sweetalert.min.js async"></Script>
          <Script src="/assets/plugins/dropzone/dropzone.min.js async"></Script>
          <Script src="/assets/plugins/maskinput/maskinput.js async"></Script>
          <Script src="/assets/plugins/jquery/jquery.validate.min.js async"></Script>
          <Script src="/assets/plugins/step_wizard/jquery.steps.min.js async"></Script>
          <Script src="/assets/plugins/step_wizard/wizard_step_init.js async"></Script>
          <Script src="/assets/_js/dashboard-base.js async"></Script>
          <Script src="/assets/_js/dashboard-form.js async"></Script>
          <Script src="/assets/plugins/datepicker/datepicker.min.js async"></Script>
          <Script src="/assets/plugins/datepicker/datepicker.en-US.js async"></Script>
          <Script src="/assets/_js/slide.js async" />
          <Script src="/assets/_js/compare.js async" />
          <Script src="/assets/plugins/slick/slick.min.js async" /> */}

          {/* <link rel="stylesheet" href="/assets/_css/dashboard.css" /> */}
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        {/* fixed position sticky problem  */}
        <body style={{ overflow: "unset !important" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const sheet = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function EnhanceApp(props) {
            return sheet.collectStyles(<App emotionCache={cache} {...props} />);
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
