import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./style.css";

export default class ButtonPaginationPosts extends Component {
  render() {
    const { textProps, onClickPropsEvent, disabled = false } = this.props;
    return (
      <button onClick={onClickPropsEvent} className="button" disabled={disabled}>
        {textProps}
      </button>
    );
  }
}

/*Tipagem feita com propTypes nas Props do JS ou JSX,
 quando ele não tem um valor requirido é preciso passar um valor como default */

ButtonPaginationPosts.propTypes = {
  textProps: PropTypes.string.isRequired,
  onClickPropsEvent: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}
