const { getTransactions } = require("./TransactionDataProvider");
const path = require("path");

test("it should properly extract transactions from csv file", async () => {
  const csvFilePath = path.join(
    __dirname,
    "..",
    "testdata",
    "MonthlyTransactions.csv"
  );
  const transactions = await getTransactions(csvFilePath);
  expect(transactions).not.toBeNull();
  expect(transactions).toHaveLength(744);
  expect(typeof transactions[0].transactionAmount).toBe("number");
});

test("it should gracefully handle when csvFilePath is wrong", async () => {
  const csvFilePath = path.join(__dirname, "..", "testdata");
  const transactions = await getTransactions(csvFilePath);
  expect(transactions).toHaveLength(0);
});
