const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customers = require('../controllers/customerController.js');

// unrestricted routes


// restricted routes
route.post('/', customers.createCustomer)
route.get("/all", customers.getCustomers);
route.get("/:id", customers.getCustomerById);
route.delete('/:id', customers.deleteCustomerById)


module.exports = route;