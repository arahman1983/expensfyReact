/*const selectExpenseTotal = expenses => {
  return expenses
    .map((expense, index) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};*/

const selectExpenseTotal = expenses => {
  const sum = (a, b) => {
    return a + b;
  };
  return expenses.map(expense => expense.amount).reduce(sum, 0);
};

export default selectExpenseTotal;
