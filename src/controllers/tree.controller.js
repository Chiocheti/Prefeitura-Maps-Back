const { Trees } = require("../models");

const treeController = {
  async getAll(req, res) {
    try {
      const trees = await Trees.findAll();

      return res.status(200).json(trees);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Server error", error });
    }
  },
};

module.exports = treeController;
