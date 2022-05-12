import React from "react";
import PropTypes from 'prop-types';
import './style.css'

const TextInput = ({ onchange, value }) => {
  return (
      <input
      className="input-search"
      type="search"
      placeholder="Type your search"
      onChange={onchange}
      value={value}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
