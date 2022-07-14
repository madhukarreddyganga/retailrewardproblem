const { parse, format } = require("date-fns");
const { getRewardPointForTransaction } = require("./RewardPointCalculator");

const getRewardPointsByCustomer = (transactions) => {
  const result = {};
  transactions.forEach((transaction) => {
    const dateKey = format(
      parse(transaction.transactionDate, "dd-MMM-yyyy", new Date()),
      "MMM_yy"
    );
    const custDetails = result[transaction.customerId] || {
      customerId: transaction.customerId,
    };
    const monthReward = custDetails[dateKey] || 0;
    const totalReward = custDetails.totalReward || 0;
    const curTransactionReward = getRewardPointForTransaction(
      transaction.transactionAmount
    );
    const updatedCustDetails = {
      ...custDetails,
      [dateKey]: monthReward + curTransactionReward,
      totalReward: totalReward + curTransactionReward,
    };
    result[transaction.customerId] = updatedCustDetails;
  });

  return Object.values(result);
};

module.exports = {
  getRewardPointsByCustomer,
};
