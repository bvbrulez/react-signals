import { signal, effect, computed } from '@preact/signals-react';

export const loading = signal(false);
export const userId = signal(1);
export const user = signal();
export const error = signal();
export const edit = signal(false);
export const greeting = computed(() => `Hello, ${user.value?.name}`);

export const count = signal(0);
export const double = computed(() => count.value * 2);
export const hochschuleBeendet = signal(false);
export const inputtext = signal('');
