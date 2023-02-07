import React from "react";
import withWidthScreenHook from "./withWidthScreenHook";

class App extends React.Component {
  render() {
    return <p>Wdith: {this.props.width}</p>;
  }
}

export default withWidthScreenHook(App);
