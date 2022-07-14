## Retail reward point calculator

This application calculates reward points per customer per month as per below rule:

`A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). `

### Installation steps

This is a simple node js application.

- run `npm install`

### Unit test case

- To run unit test cases `npm test`

### Test data

Test data is added in `<Appdir>/testData` folder. It must be a CSV file with:

- Header `customerId,transactionDate,transactionAmount`
- `transactionDate` must in `dd-mmm-yyyy` format, e.g. `10-Apr-2022`
