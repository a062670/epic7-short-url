import express from "express";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const urlList = JSON.parse(fs.readFileSync(__dirname + "/urlList.json"));

const PORT = process.env.PORT || 80;
const app = express();

app.get("/", function (req, res) {
  const url = urlList.find((url) => url.path === "/")?.url || "";

  if (url) {
    res.redirect(url);
  } else {
    res.send("No URL found");
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
