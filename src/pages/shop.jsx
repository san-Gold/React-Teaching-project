import ComponentB from "../components/componentB";
import { useHistory, useLocation } from "react-router-dom";

function Shop() {
  const history = useHistory();
  console.log("state传参", useLocation());
  const toPage = (val) => {
    history.push(val);
  };
  return (
    <div className="Shop">
      shop
      <div>state传参</div>
      <br />
      <button onClick={() => toPage("/")}>home</button>
      <br />
      <button onClick={() => toPage("/about")}>about</button>
      <br />
      <button onClick={() => toPage("/my")}>my</button>
      <br />
      <button onClick={() => history.goBack()}>goBack</button>
      <br />
      <ComponentB />
    </div>
  );
}

export default Shop;
