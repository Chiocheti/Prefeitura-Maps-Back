const { Call, sequelize } = require("../models");

const callController = {
  async getAll(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const calls = await Call.findAll({
        where: {
          status: "Aberto",
        },
      });

      await transaction.commit();
      return res.status(200).json(calls);
    } catch (error) {
      console.log(error);

      await transaction.rollback();
      return res.status(500).json({ message: "Server error", error });
    }
  },

  async create(req, res) {
    const transaction = await sequelize.transaction();

    const { call } = req.body;

    try {
      await Call.create(call);

      await transaction.commit();
      return res.status(200).json("ok");
    } catch (error) {
      console.log(error);

      await transaction.rollback();
      return res.status(500).json({ message: "Server error", error });
    }
  },
};

module.exports = callController;
