import React from 'react';
import { beendet, count, hochschuleBeendet } from './signals';

export default function Button() {
  return (
    <div>
      <button onClick={() => count.value++}>Increment</button>
      <button onClick={() => count.value--}>Decrement</button>
      <button onClick={() => (hochschuleBeendet.value = true)}>TRUE</button>
      <button onClick={() => (hochschuleBeendet.value = false)}>FALSE</button>
      <button onClick={() => (beendet.value = 0)}>0</button>
      <button onClick={() => (beendet.value = 1)}>1</button>
    </div>
  );
}
