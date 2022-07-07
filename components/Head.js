import React from "react";
import Head from "next/head";
//import Script from "next/script";
export default function AppHead() {
  return (
    <Head>
      <title>All Motors App</title>
      <meta name="description" content="browsing all type of motors vehicles" />
      <link rel="icon" href="/favicon.ico" />
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      /> */}
    </Head>
  );
}
