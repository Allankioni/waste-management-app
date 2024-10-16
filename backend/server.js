const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const RESTfulAPI = require("./routes/RESTfulAPI");
const path = require("path");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/waste", RESTfulAPI);

app.listen(port, () => {
  console.log(`Running on host http://localhost:${port}`);
});
