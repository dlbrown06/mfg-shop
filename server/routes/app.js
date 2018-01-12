const path = require("path");

/**
 * All routes that are to be passed directly to the react app
 */
const init = app => {
  app.get("/__health", (req, res) => {
    res.send("OK");
  });

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "build", "index.html"));
  });
};

module.exports = init;
