import React from 'react';
import { beendet, hochschuleBeendet } from './signals';

export default function Boolean() {
  return (
    <>
      <div>
        Boolean: {(hochschuleBeendet.value = true ? 'truee' : 'falsee')}
      </div>
      <div>0/1: {beendet.value}</div>
    </>
  );
}
