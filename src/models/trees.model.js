const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {}

  Tree.init(
    {
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      type: DataTypes.STRING,
      lastCut: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Trees",
      tableName: "trees",
      underscored: true,
      timestamps: false,
      hooks: {
        beforeCreate: (tree) => {
          tree.id = uuidv4(); //eslint-disable-line
        },
      },
    }
  );

  return Tree;
};
