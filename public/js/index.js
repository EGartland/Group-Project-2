// Get references to page elements
let $orders = $('#order-list');

// The API object contains methods for each kind of request we'll make
var API = {
  saveOrder: function(order) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/orders',
      data: JSON.stringify(order)
    });
  },
  getOrders: function() {
    return $.ajax({
      url: 'api/orders',
      type: 'GET'
    });
  },
  deleteOrder: function(id) {
    return $.ajax({
      url: 'api/orders/' + id,
      type: 'DELETE'
    });
  }
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr('data-id');

  API.deleteOrder(idToDelete).then(function() {
    location.reload();
  });
};

// Add event listeners to the submit and delete buttons
$orders.on('click', '.delete', handleDeleteBtnClick);
