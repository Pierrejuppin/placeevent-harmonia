// Import the repository modules responsible for handling data operations on the tables
const RoleRepository = require("./models/RoleRepository");
const PaidRepository = require("./models/PaidRepository");
const CategoryRepository = require("./models/CategoryRepository");
const UsersRepository = require("./models/UsersRepository");
const EventRepository = require("./models/EventRepository");
const ReservationRepository = require("./models/ReservationRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.role = new RoleRepository();
tables.paid = new PaidRepository();
tables.category = new CategoryRepository();
tables.users = new UsersRepository();
tables.event = new EventRepository();
tables.reservation = new ReservationRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
