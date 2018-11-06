import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      notes: props.expense ? props.expense.notes : "",
      amount: props.expense ? props.expense.amount : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarfocused: false,
      error: "",
      btnText: props.expense ? "Edit Expense" : "Add Expense"
    };
  }

  onDescriptiionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onNotesChange = e => {
    const notes = e.target.value;
    this.setState(() => ({
      notes
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarfocused: focused
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.amount || !this.state.description) {
      this.setState(() => ({
        error: "You should add Description and amount at least"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        notes: this.state.notes,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div className="row">
        {this.state.error && (
          <p className="bg-warning p-2">{this.state.error}</p>
        )}
        <div className="col-md-8 mx-auto">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Discription"
                className="form-control"
                value={this.state.description}
                onChange={this.onDescriptiionChange}
                autoFocus
              />
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Amount"
                    className="form-control"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarfocused}
                    onFocusChange={this.onCalendarFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Expense Notes (Optional)"
                value={this.state.notes}
                onChange={this.onNotesChange}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-default">{this.state.btnText}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ExpenseForm;
