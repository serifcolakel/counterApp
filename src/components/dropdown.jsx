import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

class DropdownEx extends Component {
  state = {};
  styles = {
    fontSize: 20,
    alingItems: "center",
    fontWeight: "bold",
    padding: 1,
    margin: 20,
  };
  render() {
    return (
      <DropdownButton
        style={this.styles}
        className="btn btn-primary btn-xs"
        id="dropdown-item-button"
        title="Dropdown button"
      >
        <Dropdown.ItemText>Secenekelerden Birini Seciniz</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Connect</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
    );
  }
}
export default DropdownEx;
