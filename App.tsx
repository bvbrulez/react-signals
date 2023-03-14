import React from 'react';
import Counter from './Counter';
import Double from './Double';
import Boolean from './Boolean';
import Button from './Button';
import InputField from './InputField';
import InputText from './InputText';
import { inputtext } from './signals';

export default function App() {
  return (
    <div>
      <div>
        <Button />
      </div>
      <div>
        <Double />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Boolean />
      </div>
      <div>
        <InputField />
      </div>
      <div>Text aus dem InputField: {inputtext}</div>
      <div>
        <InputText />
      </div>
    </div>
  );
}
