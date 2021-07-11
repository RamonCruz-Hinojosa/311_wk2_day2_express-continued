const products = require("../data/products");

const list = (req, res) => {
  return res.json(products);
};

const get = (req, res) => {
  return res.json(products.find((user) => user._id === Number(req.params.id)));
};

const create = (req, res) => {
  const id = products[products.length - 1]._id + 1;
  const product = req.body;
  product._id = id;
  products.push(product);
  return res.json(products);
};

module.exports = {
  list,
  get,
  create,
};
