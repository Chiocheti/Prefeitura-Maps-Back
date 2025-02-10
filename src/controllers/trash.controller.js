const { Trash } = require("../models");

const treeController = {
  async getAll(req, res) {
    try {
      const trash = await Trash.findAll();

      return res.status(200).json(trash);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Server error", error });
    }
  },

  async create(req, res) {
    const { trash } = req.body;
    try {
      await Trash.create(trash);

      return res.status(200).json({ status: "create" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Server error", error });
    }
  },
};

module.exports = treeController;
