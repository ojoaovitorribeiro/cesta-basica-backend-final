const mongoose = require("mongoose");

const Commerce = require("../models/Commerce");
const User = require("../models/User");

module.exports = {
  async showCommerces(req, res) {
    const userId = req.params.id;
    const commerces = await User.findOne({ _id: userId }).populate("user");

    return res.json(commerces);
  },

  async newCommerce(req, res) {
    const commerce = await Commerce.create(req.body);
    await User.updateOne(
      { _id: commerce.user },
      { $push: { commerce: commerce._id } }
    );

    return res.json(commerce);
  },

  async updateCommerce(req, res) {
    const commerce = await Commerce.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(commerce);
  },

  async destroyCommerce(req, res) {
    await Commerce.deleteOne({ _id: req.params.id });

    return res.json({ message: "Commerce apagado" });
  },

  async listCommerces(req, res) {
    const commerce = await Commerce.find({}).populate("user");

    if (commerce) {
      return res.json(commerce);
    }
  }
};

// const mongoose = require("mongoose");

// const Commerce = require("../models/Commerce");
// const User = require("../models/User");

// module.exports = {
//   async index(req, res) {
//     const user = await Commerce.findOne({ email: req.params.email }).populate([
//       "Commerce"
//     ]);
//     if (user) {
//       return res.json(user);
//     }
//   },

//   // async store(req, res) {
//   //   const { name } = req.body;

//   //   if (await Commerce.findOne({ name })) {
//   //     return res.status(400).json({ error: "User already exists" });
//   //   }

//   //   const user = await User.create(req.body);

//   //   return res.json(user);
//   // },

//   async newCommerce(req, res) {
//     const commerce = await Commerce.create(req.body);
//     // await User.updateOne(
//     //   { _id: commerce.user },
//     //   { $push: { commerce: commerce._id } }
//     // );

//     return res.json(commerce);
//   },

//   async updateCommerce(req, res) {
//     const commerce = await Commerce.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });

//     return res.json(commerce);
//   },

//   async destroyCommerce(req, res) {
//     await Commerce.deleteOne({ _id: req.params.id });

//     return res.json({ message: "Commerce apagado" });
//   },

//   async listCommerces(req, res) {
//     const commerce = await Commerce.find({}).populate("user");

//     if (commerce) {
//       return res.json(commerce);
//     }
//   }
// };
