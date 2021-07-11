const contacts = require("../data/contacts");

const list = (req, res) => {
  return res.json(contacts);
};

const get = (req, res) => {
  return res.json(contacts.find((user) => user._id === Number(req.params.id)));
};

const create = (req, res) => {
  const id = contacts[contacts.length - 1]._id + 1;
  const contact = req.body;
  contact._id = id;
  contacts.push(contact);
  return res.json(contacts);
};

module.exports = {
  list,
  get,
  create,
};
