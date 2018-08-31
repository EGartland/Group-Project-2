let db = require('../models');

module.exports = function(app) {

  // Get all orders
  app.get('/api/orders', function(req, res) {
    db.CoffeeOrder.findAll({})
      .then(function(orders) {
        res.json(orders);
      });
  });

  // Create a new orders
  app.post('/api/orders', function(req, res) {
    db.CoffeeOrder.create(req.body)
      .then( order => res.json(order) );
  });
  
  app.put('/api/orders/:id', (req, res) => {
	  db.CoffeeOrder.update({
		  completed: true
	  }, {
      where: {
        id: req.params.id
      }
    }).then( order => res.json(order) );
  });

  // Delete an orders by id
  app.delete('/api/orders/:id', function(req, res) {
    db.CoffeeOrder.destroy({ where: { id: req.params.id } })
      .then(function(order) {
        res.json(order);
      });
  });

  // Get all employees
  app.get('/api/employees', function(req, res) {
    db.Employee.findAll({})
      .then(function(orders) {
        res.json(orders);
      });
  });

  // Create a new employee
  app.post('/api/employees', function(req, res) {
    db.Employee.create(req.body)
      .then(function(employee) {
        res.json(employee);
      });
  });

  // Delete an employee by id
  app.delete('/api/employees/:id', function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });
};
