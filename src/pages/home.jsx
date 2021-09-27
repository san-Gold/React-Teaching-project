import ComponentA from "../components/componentA";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLogin } from "../store/actions/userInfoAction";

function Home() {
  const history = useHistory();

  let dispatch = useDispatch();
  const outLogin = () => {
    let data = {
      isLogin: false,
      info: {},
    };
    dispatch(updateLogin(data));
  };
  const toPage1 = (val) => {
    history.push({
      pathname: val,
      query: { id: 33, age: 56 },
    });
  };
  const toPage2 = (val) => {
    history.push(val, { id: 33, age: 56 });
  };
  const toPage3 = (val) => {
    history.push(val + "/333");
  };
  return (
    <div className="Home">
      Home
      <br />
      <button onClick={() => toPage1("/about")}>about</button>
      <br />
      <button onClick={() => toPage2("/shop")}>shop</button>
      <br />
      <button onClick={() => toPage3("/my")}>my</button>
      <br />
      <button onClick={() => toPage1("/myaaa")}>myaaa</button>
      <br />
      <button onClick={() => outLogin()}>退出登录</button>
      <ComponentA />
    </div>
  );
}

export default Home;
