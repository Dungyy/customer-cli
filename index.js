const mongoose = require("mongoose");
const customer = require("./models/customer");

// Global Promise
mongoose.Promise = global.Promise;

// Connect to DB
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useMongoClient: true,
});

// Import Model
const Customer = require("./models/customer");

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    db.close();
  });
};

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({
    $or: [{ FirstName: search }, { LastName: search }, { OrderNumber: search }],
  }).then((customer) => {
    console.info(customer);
    console.info(`${customer.length} matches`);
    db.close();
  });
};


// Export 
modules.exports = {
    addCustomer,
    findCustomer
}