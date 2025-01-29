const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Call extends Model {}

  Call.init(
    {
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      service: DataTypes.STRING,
      priority: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Call",
      tableName: "calls",
      underscored: true,
      timestamps: true,
      hooks: {
        beforeCreate: (call) => {
          call.id = uuidv4(); //eslint-disable-line
        },
      },
    }
  );

  return Call;
};
