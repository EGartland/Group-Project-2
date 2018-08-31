// Get references to page elements
let $orders = $('.order-list');
let $employees = $('#employee-list');
let $orderForm = $('#createOrder');
let $employeeForm = $('#createEmployee');

// Initializes Materialize Select Input Fields
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

// The API object contains methods for each kind of request we'll make
let API = {
  saveOrder: function(order) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: '../api/orders',
      data: JSON.stringify(order)
    });
  },
  getOrders: function() {
    return $.ajax({
      url: 'api/orders',
      type: 'GET'
    });
  },
  fulfillOrder: function(id) {
    return $.ajax({
      url: `api/orders/${id}`,
      type: 'PUT'
    });
  },
  deleteOrder: function(id) {
    return $.ajax({
      url: `api/orders/${id}`,
      type: 'DELETE'
    });
  },
  createEmployee: function(employee) {
    return $.ajax({
      url: 'api/employees',
      type: 'POST',
      data: employee
    });
  },
  deleteEmployee: function(id) {
    return $.ajax({
      url: `api/employees/${id}`,
      type: 'DELETE'
    });
  }
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
function deleteOrder() {
  let orderId = $(this)
    .parent()
    .attr('data-id');

  API.deleteOrder(orderId).then(function() {
    location.reload();
  });
}
function fulfillOrder() {
  let orderId = $(this)
    .parent()
    .attr('data-id');

  API.fulfillOrder(orderId).then(function() {
    location.reload();
  });
}

function addEmployee(e) {
  e.preventDefault();
  let employee = {
    name: $('#employeeName').val(),
    department: $('#depts').val()
  };
  API.createEmployee(employee)
    .then(() => window.location.reload());
}

// console.log(addEmployee);
function deleteEmployee() {
  let id = $(this).attr('id');
  API.deleteEmployee(id)
    .then(() => window.location.reload());
}

function submitOrder(e) {
  e.preventDefault();
  let order = {
    EmployeeId: $('#name').val(),
    order: $('#order').val(),
    comments: $('#comments').val()
  };
  API.saveOrder(order).then(() => window.location = '../../');
}

$orderForm.on('submit', submitOrder);
$employeeForm.on('submit', addEmployee);

// Add event listeners to the submit and delete buttons
$orders.on('click', '.delete', deleteOrder);
$orders.on('click', '.fulfill', fulfillOrder);
$employees.on('click', '.delete', deleteEmployee);