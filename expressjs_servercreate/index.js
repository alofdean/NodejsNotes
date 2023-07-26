const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.status(200).send("Hakkinda Sayfasi!"); //Bu sekilde status code'da gonderilebiliyor.
});

app.get("*", (req, res) => {
  res.status(404).send("Sayfa Bulunamadi!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi.`);
});
