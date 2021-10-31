import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { phase } from "../const";

export default class DateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.now()),
    };
  }
  render() {
    const { onPhaseChange } = this.props;

    const onDateSelect = () => {
      const expectedDate = new Date("February 3, 2300");
      console.log(expectedDate);
      console.log(this.state.date);
      if (this.state.date.getDate() === expectedDate.getDate()) {
        onPhaseChange(phase.TRAVEL);
      }
    };
    const onDateChange = (date) => {
      this.setState({ date });
    };

    return (
      <div className="top">
        <h1>select date</h1>
        <ReactDatePicker selected={this.state.date} onChange={onDateChange} />
        <button
          className="fancy-button"
          onClick={() => {
            onDateSelect();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
