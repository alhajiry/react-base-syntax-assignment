import UserOutput from "./components/UserOutput/UserOutput";
import UserInput from "./components/UserInput/UserInput";
import "./App.css";
// import "./components/UserInput/style.scss";

import React, { Component } from "react";

class App extends Component {
  state = {
    user: [
      { userName: "kubikuz", createdOn: "2009" },
      { userName: "tidehunter", createdOn: "2009" }
    ]
  };

  switchUserName = newUserName => {
    this.setState({
      user: [
        { userName: "kubikuz", createdOn: "2009" },
        { userName: newUserName, createdOn: "2009" }
      ]
    });
    console.log("halo");
  };

  handleUserName = event => {
    this.setState({
      user: [
        { userName: event.target.value, createdOn: "2009" },
        { userName: "tidehunter", createdOn: "2009" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          currentUserName={this.state.user[0].userName}
          changed={this.handleUserName}
          click={this.switchUserName.bind(this, "Nature Prophet")}
        />
        <UserOutput
          userName={this.state.user[0].userName}
          date={this.state.user[0].createdOn}
        >
          Username 1 :
        </UserOutput>
        <UserOutput
          userName={this.state.user[1].userName}
          date={this.state.user[1].createdOn}
        >
          Username 2 :
        </UserOutput>
      </div>
    );
  }
}

export default App;
