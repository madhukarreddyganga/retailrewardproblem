const getRewardPointForTransaction = (transactionAmount) => {
  let rewardPoint = 0;
  if (transactionAmount > 100) {
    rewardPoint += (transactionAmount - 100) * 2;
    rewardPoint += 50;
  } else if (transactionAmount > 50) {
    rewardPoint += transactionAmount - 50;
  }
  return rewardPoint;
};

module.exports = {
  getRewardPointForTransaction,
};
