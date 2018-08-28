
module.exports = function (sequelize, DataTypes) {
  var CoffeeOrder = sequelize.define('CoffeeOrder', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    completed: {
      type: DataTypes.BOOLEAN,
      default: false,
    }

  });
  return CoffeeOrder;
};

