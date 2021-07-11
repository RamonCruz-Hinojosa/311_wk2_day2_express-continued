const comments = require("../data/comments");

const list = (req, res) => {
  return res.json(comments);
};

const get = (req, res) => {
  return res.json(comments.find((user) => user._id === Number(req.params.id)));
};

const create = (req, res) => {
  const id = comments[comments.length - 1]._id + 1;
  const comment = req.body;
  comment._id = id;
  comments.push(comment);
  return res.json(comments);
};

module.exports = {
  list,
  get,
  create,
};
