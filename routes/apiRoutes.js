let db = require('../models');

module.exports = function(app) {
  // Get all examples
  app.get('/api/orders', function(req, res) {
    db.CoffeeOrder.findAll({})
      .then(function(orders) {
        res.json(orders);
      });
  });

  // Create a new example
  app.post('/api/orders', function(req, res) {
    db.CoffeeOrder.create(req.body)
      .then(function(order) {
        res.json(order);
      });
  });

  // Delete an example by id
  app.delete('/api/orders/:id', function(req, res) {
    db.coffeeOrder.destroy({ where: { id: req.params.id } })
      .then(function(order) {
        res.json(order);
      });
  });
};
