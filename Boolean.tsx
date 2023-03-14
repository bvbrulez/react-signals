import React from 'react';
import { hochschuleBeendet } from './signals';

export default function Boolean() {
  return <div>Boolean: true oder {hochschuleBeendet}</div>;
}
