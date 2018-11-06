import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseItemList = ({ dispatch, id, description, amount, createdAt }) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{moment(createdAt).format("MMM Do, YYYY")}</td>
    <td>
      <Link className="btn btn-info" to={`/edit/${id}`}>
        Edit
      </Link>
    </td>
    <td>
      <button
        className="btn btn-warning"
        onClick={() => {
          dispatch(startRemoveExpense({ id }));
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default connect()(ExpenseItemList);
