import { writable, readable } from "svelte/store";

export const API_URL = readable("https://koala.stream");

export const sideNav = writable(false);
export const path = writable(false);
export const user = writable(false);
