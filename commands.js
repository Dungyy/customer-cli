const program = require("commander");
const { addCustomer, findCustomer } = require("./index");

program
    .version("1.0.0")
    .description("Client Management System");

program
  .command(
    "add <FirstName> <LastName> <Phone> <Email> <OrderNumber> <OrderStatus> <OrderCompleted>"
  )
  .alias("a")
  .description("Add a Customer")
  .action(
    (
      FirstName,
      LastName,
      Phone,
      Email,
      OrderNumber,
      OrderStatus,
      OrderCompleted
    ) => {
      addCustomer({
        FirstName,
        LastName,
        Phone,
        Email,
        OrderNumber,
        OrderStatus,
        OrderCompleted,
      });
    }
  );
program
    .command('find <name>')
    .alias('f')
    .description('Find a Customer')
    .action(name => findCustomer(name));

program.parse(process.argv);
