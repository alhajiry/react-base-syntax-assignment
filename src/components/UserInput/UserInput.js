import React, { Component } from "react";
import "./style.scss";

class UserInput extends Component {
  render() {
    return (
      <div className="user-input-head">
        <h1>Switch The Index 1 Username</h1>
        <input
          className="user-input-form"
          type="text"
          placeholder="Name"
          onChange={this.props.changed}
          value={this.props.currentUserName}
        />
        <div>
          <button className="btn-primary" onClick={this.props.click}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}

export default UserInput;
