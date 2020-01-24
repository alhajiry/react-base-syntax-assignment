import React, { Component } from "react";
import "./style.scss";

class UserOutput extends Component {
  render() {
    return (
      <div className="user-output-head">
        <h2>{this.props.children}</h2>
        <p className="user-card-content">
          The username <em>{this.props.userName}</em> was created on
          <p>"{this.props.date}"</p>
        </p>
      </div>
    );
  }
}

export default UserOutput;
