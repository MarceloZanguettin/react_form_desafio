import React from 'react';

const Radio = ({ pergunta, options, id }) => {
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input type="radio" value={option} />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
