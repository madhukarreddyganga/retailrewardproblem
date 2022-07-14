const path = require("path");
const { getTransactions } = require("./TransactionDataProvider");
const { getRewardPointsByCustomer } = require("./RewardPointsByCustomers");

const csvFilePath = path.join(
  __dirname,
  "..",
  "testdata",
  "MonthlyTransactions.csv"
);

getTransactions(csvFilePath)
  .then((transactions) => getRewardPointsByCustomer(transactions))
  .then((result) => console.table(result));
