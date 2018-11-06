import React from "react";
import { connect } from "react-redux";
import ExpenseItemList from "./expenseItems";
import selectedExpenses from "../selectors/expenses";
const ExpenseList = props => (
  <div>
    <h5>Expense List</h5>
    <table className="table table-striped">
      <tbody>
        {props.expenses.map(expense => {
          return <ExpenseItemList key={expense.id} {...expense} />;
        })}
      </tbody>
    </table>
  </div>
);
/* to see all list 
const mapStateToProps = state => ({
  expenses: state.expenses,
  filters: state.filters
});*/

/* to see filtered list */
const mapStateToProps = state => ({
  expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
