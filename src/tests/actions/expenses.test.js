import React from "react";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
Text("should set up remove expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EPENSE",
    id: "123abc"
  });
});
