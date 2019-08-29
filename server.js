const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const HobbitsDb = require("./hobbits/hobbitsModel.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("<h2>Node Server Testing Challenge!</h2>");
});

server.get("/hobbits", (req, res) => {
  HobbitsDb.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
