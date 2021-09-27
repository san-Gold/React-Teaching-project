import store from "../store/index";

import { updateActionAge } from "../store/actions/userInfoAction";

export function updateAges(value) {
  console.log("utils");
  store.dispatch(updateActionAge(value));
}

export const saveState = (name, state) => {
  try {
    localStorage.setItem(name, JSON.stringify(state));
  } catch (err) {
    localStorage.setItem(name, state);
  }
};
export const getState = (name) => {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {
    return localStorage.getItem(name) || false;
  }
};
