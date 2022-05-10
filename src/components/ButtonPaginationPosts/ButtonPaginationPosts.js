import React, { Component } from "react";
import "./style.css";

export default class ButtonPaginationPosts extends Component {
  render() {
    const { textProps, onClickPropsEvent, disabled } = this.props;
    return (
      <button onClick={onClickPropsEvent} className="button" disabled={disabled}>
        {textProps}
      </button>
    );
  }
}
