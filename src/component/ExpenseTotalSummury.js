import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenseTotal from "../selectors/SelectExpenseTotal";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseTotalSummury = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  return (
    <div className="py-3">
      <p>
        There are <b>{expenseCount}</b> {expenseWord} with total amount{" "}
        <b>{expensesTotal}</b>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpenseTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseTotalSummury);
