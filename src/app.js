const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.listen(PORT, () => console.log("App listening to port: " + PORT));

//Require es basicamente lo que se puede recibir
//Response tiene que ver con la respuesta de este endpoint hacia el front end

app.get("/milanesa", (req, res) => {
  res.send("HOLA MILANESA");
});

app.get("/home", (req, res) => {
  console.log(path.join(__dirname, "views/home.html"));
  res.sendFile(path.join(__dirname, "views/home.html"));
});
