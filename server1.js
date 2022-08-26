const express = require("express");
const path = require("path");
const port = 4000;
const app = express();
app.use("/store", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("server is listening on port " + port);
});
