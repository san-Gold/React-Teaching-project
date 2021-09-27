import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLogin } from "../store/actions/userInfoAction";

function Login() {
  const history = useHistory();
  console.log("state传参", useLocation());
  const toPage = (val) => {
    history.push(val);
  };

  let dispatch = useDispatch();
  const login = () => {
    let data = {
      isLogin: true,
      info: {
        nickName: "三金吖",
        userId: 18,
      },
    };
    dispatch(updateLogin(data));
  };
  return (
    <div className="Login">
      <h1>login</h1>
      <button onClick={() => toPage("/")}>home</button>
      <button onClick={() => login()}>登录</button>
    </div>
  );
}

export default Login;
