import React from "react";
import { phase } from "../const";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  render() {
    const { onPhaseChange } = this.props;

    const handleSubmit = () => {
      if (this.state.input === "78245") {
        onPhaseChange(phase.PLAYING);
      } else {
        this.setState({ input: "" });
      }
    };

    return (
      <div className="top">
        <h3>Enter Password:</h3>
        <input
          type="password"
          value={this.state.input}
          onChange={(pass) => {
            this.setState({
              input: pass.target.value,
            });
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </div>
    );
  }
}
