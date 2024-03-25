require("dotenv").config();
const express = require("express");
const main = require("./database/conn.js");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT;
main();
routes(app);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
