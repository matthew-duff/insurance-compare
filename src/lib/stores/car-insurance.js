// src/stores/car-insurance-policies.js
import { writable } from 'svelte/store';

export const carInsurancePolicies = writable([
  { name: 'Basic Coverage', url: '/car-basic' },
  { name: 'Full Coverage', url: '/car-full' },
]);