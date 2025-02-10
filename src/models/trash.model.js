const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Trash extends Model {}

  Trash.init(
    {
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      priority: DataTypes.INTEGER,
      status: DataTypes.STRING,
      type: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      lastClean: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Trash",
      tableName: "trash",
      underscored: true,
      timestamps: false,
      hooks: {
        beforeCreate: (trash) => {
          trash.id = uuidv4(); //eslint-disable-line
        },
      },
    }
  );

  return Trash;
};
