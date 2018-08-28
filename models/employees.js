module.exports = function (sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    favorite: {
      type: DataTypes.STRING
    },
    
  });
  Employee.associate = function(models) {

    Employee.hasMany(models.CoffeeOrder, {as: 'employeeId'});
  };
  return Employee;
};