import React from "react";
import Head from "next/head";
export default function AppHead() {
  return (
    <Head>
      {/* <meta charset="UTF-8" /> */}
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="/images/favicon.png" rel="shortcut icon" />
      <title>All Motors App</title>
      <meta name="description" content="browsing all type of motors vehicles" />
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      /> */}
    </Head>
  );
}
