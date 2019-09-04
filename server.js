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
      res
        .status(500)
        .json({ message: "There was an error getting the hobbits." });
    });
});

server.post("/hobbits", (req, res) => {
  const hobbit = req.body;
  HobbitsDb.add(hobbit)
    .then(hobbit => {
      res.status(201).json(hobbit);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the hobbit." });
    });
});

server.delete("/hobbits/:id", (req, res) => {
  const { id } = req.params;

  HobbitsDb.remove(id)
    .then(hobbit => {
      if (hobbit) {
        res.status(204);
      } else {
        res.status(404).json({
          message: "The hobbit with the specified ID does not exist."
        });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "The hobbit could not be removed." });
    });
});

module.exports = server;
