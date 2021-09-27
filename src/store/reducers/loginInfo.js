import { saveState, getState } from "../../utils/index";
const defaultLoginInfo = {
  isLogin: false,
  info: {},
};
export default function LoginInfo(prevState = defaultLoginInfo, active) {
  let { type, payload } = active;
  switch (type) {
    case "update":
      prevState = payload;
      saveState("loginInfo", prevState);
      return (
        getState("loginInfo") || {
          ...prevState,
        }
      );
    default:
      return getState("loginInfo") || prevState;
  }
}
