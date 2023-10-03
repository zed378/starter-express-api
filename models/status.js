"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      status.belongsTo(models.produk, {
        as: "produk",
        foreignKey: {
          name: "id_produk",
        },
      });
    }
  }
  status.init(
    {
      id_status: DataTypes.INTEGER,
      nama_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "status",
    }
  );
  return status;
};
