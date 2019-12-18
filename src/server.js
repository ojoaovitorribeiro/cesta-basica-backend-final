const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://cestabasica:senha123@cluster0-acifk.mongodb.net/cestabasica?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

client.connect(err => {
  const collection = client.db("cestabasica").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log("Conectado ao banco de dados.");
});

mongoose.connection.on("error", err => {
  console.log("Erro de conexão:" + err);
});

mongoose.connection.on("disconnect", () => {
  console.log("Banco de dados desconectado.");
});

const server = express();
server.use(cors());
server.use(express.json());

server.use(routes);

server.listen(3003);
