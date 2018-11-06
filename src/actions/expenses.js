import databases from "../firebase/firebase";
export const addExpens = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().authReducer.uid;
    const {
      description = "",
      notes = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const newExpense = {
      description,
      notes,
      amount,
      createdAt
    };

    databases
      .ref(`users/${uid}/Expenses`)
      .push(newExpense)
      .then(ref => {
        dispatch(
          addExpens({
            id: ref.key,
            ...newExpense
          })
        );
      });
  };
};

export const removeExpens = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().authReducer.uid;
    return databases
      .ref(`users/${uid}/Expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpens({ id }));
      });
  };
};

export const editExpense = (id, updtes) => ({
  type: "EDIT_EXPENSE",
  id,
  updtes
});

export const startEditExpense = (id, updtes) => {
  return (dispatch, getState) => {
    const uid = getState().authReducer.uid;
    databases
      .ref(`users/${uid}/Expenses/${id}`)
      .update(updtes)
      .then(() => {
        dispatch(editExpense(id, updtes));
      });
  };
};

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startsetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().authReducer.uid;
    return databases
      .ref(`users/${uid}/Expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
