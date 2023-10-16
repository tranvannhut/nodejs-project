require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// config template engine
configViewEngine(app);

// declare routes
app.use("/", webRouter);

app.listen(port, () => {
  console.log(`Please access link on port ${port} `);
});
