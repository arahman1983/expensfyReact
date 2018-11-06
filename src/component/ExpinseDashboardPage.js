import React from "react";
import ConnectedExpenseList from "./expenseList";
import ExpenseListFilters from "./expenseListFilters";
import ExpenseTotalSummury from "./ExpenseTotalSummury";

const ExpinseDashboardPage = () => (
  <div className="container py-3">
    <ExpenseTotalSummury />
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);
export default ExpinseDashboardPage;
