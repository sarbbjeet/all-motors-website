const next = require("next");
const express = require("express"); //
const port = 5000;
const hostname = "localhost";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const path = require("path");
app
  .prepare()
  .then(() => {
    const server = express();
    server.use("/store", express.static(path.join(__dirname, "public")));
    server.use("/_next", express.static(path.join(__dirname, "../.next")));

    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      else console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  });
