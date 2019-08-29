const db = require("../data/dbConfig.js");

module.exports = {
  add,
  getAll,
  findBy,
  findById
};

function getAll() {
  return db("hobbits");
}

function findBy(filter) {
  return db("hobbits").where(filter);
}

function add(hobbit) {
  return db("hobbits")
    .insert(hobbit, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("hobbits")
    .where({ id })
    .first();
}
