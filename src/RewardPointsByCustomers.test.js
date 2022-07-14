const { getRewardPointsByCustomer } = require("./RewardPointsByCustomers");

describe("Should calculate rewards point properly", () => {
  test("for same month transactions", () => {
    const transactions = [
      {
        customerId: "240",
        transactionDate: "02-Apr-2022",
        transactionAmount: 70,
      },
      {
        customerId: "240",
        transactionDate: "02-Apr-2022",
        transactionAmount: 140,
      },
    ];
    const result = getRewardPointsByCustomer(transactions);
    expect(result).toHaveLength(1);
    expect(result[0].totalReward).toEqual(150);
  });
  test("for different month transactions", () => {
    const transactions = [
      {
        customerId: "240",
        transactionDate: "02-Apr-2022",
        transactionAmount: 240,
      },
      {
        customerId: "240",
        transactionDate: "15-Mar-2022",
        transactionAmount: 180,
      },
    ];
    const result = getRewardPointsByCustomer(transactions);
    expect(result).toHaveLength(1);
    expect(result[0].Mar_22).toEqual(210);
  });
  test("for different customers", () => {
    const transactions = [
      {
        customerId: "385",
        transactionDate: "02-Apr-2022",
        transactionAmount: 140,
      },
      {
        customerId: "240",
        transactionDate: "15-Mar-2022",
        transactionAmount: 180,
      },
    ];
    const result = getRewardPointsByCustomer(transactions);
    expect(result).toHaveLength(2);
  });
  test("for different customers different month transactions", () => {
    const transactions = [
      {
        customerId: "385",
        transactionDate: "02-Apr-2022",
        transactionAmount: 140,
      },
      {
        customerId: "240",
        transactionDate: "15-Mar-2022",
        transactionAmount: 180,
      },
      {
        customerId: "385",
        transactionDate: "02-Jun-2022",
        transactionAmount: 65,
      },
    ];
    const result = getRewardPointsByCustomer(transactions);
    expect(result).toHaveLength(2);
    expect(result.find((res) => res.customerId === "385").totalReward).toEqual(
      145
    );
  });
});
