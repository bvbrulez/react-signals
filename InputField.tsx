import React from 'react';
import { inputtext } from './signals';

export default function InputField() {
  const changeInput = () => {
    console.log(event.target.value);
    inputtext.value = event.target.value;
  };

  return (
    <div>
      <input type="text" onChange={changeInput} />
    </div>
  );
}
