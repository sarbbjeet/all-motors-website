// in src/App.js
import * as React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import restProvider from "ra-data-simple-rest";

import PostList from "./posts";

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("Content-Range", "posts 0-20/100");
  return fetchUtils.fetchJson(url, options);
};

const App = () => (
  <Admin dataProvider={restProvider("http://localhost:3000/api")}>
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
