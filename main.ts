import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
console.log("listening on http://localhost:3000/");