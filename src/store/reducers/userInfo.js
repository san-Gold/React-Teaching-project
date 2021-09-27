import { saveState, getState } from "../../utils/index";
const defalutState = {
  name: "李瑞鑫",
  age: "18",
  height: "180cm",
};
export default function userInfo(prevState = defalutState, action) {
  let { type, payload } = action;
  switch (type) {
    case "updateName":
      prevState.name = payload;
      saveState("userInfo", prevState);
      return (
        getState("userInfo") || {
          ...prevState,
        }
      );
    case "updateAge":
      prevState.age = payload;
      saveState("userInfo", prevState);
      return (
        getState("userInfo") || {
          ...prevState,
        }
      );
    case "updateHeight":
      prevState.height = payload;
      saveState("userInfo", prevState);
      return (
        getState("userInfo") || {
          ...prevState,
        }
      );
    default:
      return getState("userInfo") || prevState;
  }
}
