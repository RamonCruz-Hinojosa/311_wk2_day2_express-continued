const vehicles = require("../data/vehicles");

const list = (req, res) => {
  return res.json(vehicles);
};

const get = (req, res) => {
  return res.json(vehicles.find((user) => user._id === Number(req.params.id)));
};

const create = (req, res) => {
  const id = vehicles[vehicles.length - 1]._id + 1;
  const vehicle = req.body;
  vehicle._id = id;
  vehicles.push(vehicle);
  return res.json(vehicles);
};

module.exports = {
  list,
  get,
  create,
};
