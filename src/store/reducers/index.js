import { combineReducers } from "redux";
import userInfo from "./userInfo";
import loginInfo from "./loginInfo";
export default combineReducers({
  userInfo,
  loginInfo,
});
