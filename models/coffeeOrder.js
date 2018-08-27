module.exports = function (sequelize, DataTypes) {
  var CoffeeOrder = sequelize.define('CoffeeOrder', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    order: DataTypes.STRING,
    comments: DataTypes.TEXT,
    department: DataTypes.STRING

  });
  return CoffeeOrder;
};