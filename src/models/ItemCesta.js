const { Schema, model } = require("mongoose");

const ItemCestaSchema = new Schema({
  descricao: {
    type: String,
    required: true
  },

  qtd: {
    type: Number,
    required: true
  },

  valor: {
    type: String,
    required: true
  }
});

module.exports = model("ItemCesta", ItemCestaSchema);
