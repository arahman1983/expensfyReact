import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

const AddExpinsePage = props => (
  <div className="container my-3">
    <h3>Add Expense</h3>
    <hr />
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

/*const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});
*/
export default connect()(AddExpinsePage);
