const express = require("express");

const routes = express.Router();

routes.get("/users", (req, res) => {
  return res.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Thiago F Dornelles"
  });
});

module.exports = routes;
