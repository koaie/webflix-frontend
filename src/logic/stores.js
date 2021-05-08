import { writable, readable } from "svelte/store";

export const API_URL = readable("https://koala.stream");

const storedUser = localStorage.user;

export const largeDialog = writable(false);
export const listDialog = writable(false);
export const sideNav = writable(false);
export const path = writable(false);
export const user = writable(storedUser ? JSON.parse(storedUser) : false);
export const content = writable(false);
export const episodes = writable(false);
export const rememberMe = writable(false);
export const logout = writable(false);

let tempMel = false;

rememberMe.subscribe((val) => {
  tempMel = val;
});

logout.subscribe((val) => {
  if (val) {
    localStorage.user = 0;
  }
});

user.subscribe((val) => {
  if (tempMel) {
    localStorage.user = JSON.stringify(val);
  }
});
