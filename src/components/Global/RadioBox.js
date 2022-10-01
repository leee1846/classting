import React from 'react';

function RadioBox({ id, text, onChange, checked }) {
  return (
    <label htmlFor={id}>
      <input type="radio" id={id} checked={checked} onChange={onChange} />
      <span>{text}</span>
    </label>
  );
}

export default RadioBox;
