const express = require("express");
const bearerToken = require("express-bearer-token");
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

const constants = require("../src/config/constants");

const { PORT } = constants.APP;

const app = express();

// parse the JWT token based on the RFC6750 spec
app.use(bearerToken());

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// security module
app.use(helmet());

// Gzip
app.use(compression());

app.use(express.static(path.join(__dirname, "..", "build")));

require("./routes/app")(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
