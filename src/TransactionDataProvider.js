const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");

const getTransactions = async (csvFilePath) => {
  const filePathStat = fs.statSync(csvFilePath);
  if (filePathStat.isFile()) {
    const transactionJSON = await csv().fromFile(csvFilePath);
    return transactionJSON.map((transaction) => ({
      customerId: transaction.customerId,
      transactionDate: transaction.transactionDate,
      transactionAmount: Number(transaction.transactionAmount),
    }));
  } else {
    return [];
  }
};

module.exports = {
  getTransactions,
};
