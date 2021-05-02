import { writable, readable } from "svelte/store";

export const API_URL = readable("https://koala.stream");

export const largeDialog = writable(false);
export const listDialog = writable(false);
export const sideNav = writable(false);
export const path = writable(false);
export const user = writable(false);
export const data = writable(false);
export const content = writable(false);
export const episodes = writable(false);
