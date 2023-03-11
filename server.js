const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("dist"));
app.use(express.static("public"));

app.get(
  ["/", "/login", "/sign-in", "/profile", "/chat", "/not-found", "/error"],
  (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  }
);

app.use(function (req, res, next) {
  res.status(404);
  // throw new Error();
  if (req.accepts("html")) {
    res.redirect("/not-found");
    return;
  }
  if (req.accepts("json")) {
    res.json({ error: "Not found" });
    return;
  }
  res.type("txt").send("Not found");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).redirect("/error");
});

app.listen(PORT, function () {
  console.log(`app running at http://localhost:${PORT}/`);
});
