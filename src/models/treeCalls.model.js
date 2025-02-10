const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class TreeCall extends Model {
    static associate(models) {
      this.belongsTo(models.Trees, { foreignKey: "treeId" });
    }
  }

  TreeCall.init(
    {
      treeId: DataTypes.INTEGER,
      priority: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "TreeCalls",
      tableName: "tree_calls",
      underscored: true,
      timestamps: false,
      hooks: {
        beforeCreate: (call) => {
          call.id = uuidv4(); //eslint-disable-line
        },
      },
    }
  );

  return TreeCall;
};
