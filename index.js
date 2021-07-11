const express = require("express");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const products = require("./routes/products");
const contacts = require("./routes/contacts");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static("public"));
app.use(express.json());

app.use("/contacts", contacts);
app.use("/products", products);
app.use("/comments", comments);
app.use("/vehicles", vehicles);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
