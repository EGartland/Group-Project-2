module.exports = function (sequelize, DataTypes) {
  var CoffeeOrder = sequelize.define('CoffeeOrder', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    order: DataTypes.STRING,
    comments: DataTypes.STRING,
    departments: DataTypes.STRING

  });
  return CoffeeOrder;
};