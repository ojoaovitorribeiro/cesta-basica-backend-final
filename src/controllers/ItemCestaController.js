const Item = require("../models/ItemCesta");

module.exports = {
  async createItem(req, res) {
    console.log("chegou aq");
    try {
      const iten = await Item.create(req.body);

      return res.json(iten);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Error creating item" });
    }
  },

  async listItens(req, res) {
    console.log("chegou aq list");
    try {
      const iten = await Item.find({});

      return res.json(iten);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Error listing item" });
    }
  }
};
