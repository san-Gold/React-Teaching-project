export const updateActionName = (data) => ({
  type: "updateName",
  payload: data,
});
export const updateActionAge = (data) => ({
  type: "updateAge",
  payload: data,
});
// 异步的updateHeight
export const updateActionHeight = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "updateHeight",
        payload: data,
      });
    }, 1000);
  };
};

// 异步的updateLogin
export const updateLogin = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "update",
        payload: data,
      });
    }, 1000);
  };
};
