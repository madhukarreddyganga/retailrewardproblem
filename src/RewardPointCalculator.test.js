const { getRewardPointForTransaction } = require("./RewardPointCalculator");

describe("getRewardPointForTransaction should calculate properly", () => {
  test("when transaction amount is less than 50", () => {
    expect(getRewardPointForTransaction(45)).toEqual(0);
  });
  test("when transaction amount is equal to 50", () => {
    expect(getRewardPointForTransaction(50)).toEqual(0);
  });
  test("when transaction amount is greather than 50 but less than 100", () => {
    expect(getRewardPointForTransaction(65)).toEqual(15);
  });
  test("when transaction amount is equal to 100", () => {
    expect(getRewardPointForTransaction(100)).toEqual(50);
  });
  test("when transaction amount is greater than 100", () => {
    expect(getRewardPointForTransaction(120)).toEqual(90);
  });
});
