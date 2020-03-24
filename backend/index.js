const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Thiago F Dornelles"
  });
});

app.listen(3333);
