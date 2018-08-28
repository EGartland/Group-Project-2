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
    console.log(req.body);
    db.CoffeeOrder.create(req.body)
      .then(function() {
        res.render('index', { msg: 'Order created successfully!'});
      });
  });

  // Delete an example by id
  app.delete('/api/orders/:id', function(req, res) {
    console.log(req.params.id);
    db.CoffeeOrder.destroy({ where: { id: req.params.id } })
      .then(function(order) {
        res.json(order);
      });
  });
};
