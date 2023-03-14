import React from 'react';
import { count, hochschuleBeendet } from './signals';

export default function Button() {
  return (
    <div>
      <button onClick={() => count.value++}>Increment</button>
      <button onClick={() => count.value--}>Decrement</button>
      <button onClick={() => (hochschuleBeendet.value = true)}>TRUE</button>
      <button onClick={() => (hochschuleBeendet.value = false)}>FALSE</button>
    </div>
  );
}
