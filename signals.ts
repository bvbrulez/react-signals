import { signal, computed } from '@preact/signals-react';

export const count = signal(0);
export const double = computed(() => count.value * 2);
export const hochschuleBeendet = signal(false);
export const beendet = signal(0);
export const inputtext = signal('');
