import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <input
            className="form-control"
            type="text"
            value={this.props.filters.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="col-3">
          <select
            className="form-control"
            value={this.props.filters.sortBy}
            onChange={e => {
              if (e.target.value === "amount") {
                this.props.dispatch(sortByAmount());
              } else if (e.target.value === "date") {
                this.props.dispatch(sortByDate());
              }
            }}
          >
            <option value="amount">Sort By Amount</option>
            <option value="date">Sort By Date</option>
          </select>
        </div>
        <div className="col-6">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            showClearDates={true}
            numberOfMonths={1}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => ({
  filters: state.filters
});
export default connect(mapStateToProp)(ExpenseListFilters);
