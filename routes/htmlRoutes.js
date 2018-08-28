let db = require('../models');

module.exports = function(app) {
  // Load index page
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/orders/create', (req, res) => {
    res.render('createOrder');
  });

  app.get('/orders', (req, res) => {
    db.CoffeeOrder.findAll({}).then(function(orders) {
      res.render('orders', { orders });
    });    
  });

  app.get('/employees', (req, res) => {
    res.render('employees');
  });

  app.get('/employees/add', (req, res) => {
    res.render('createEmployee');
  });


  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
