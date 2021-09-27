import { useHistory, useRouteMatch } from "react-router-dom";
function My() {
  const history = useHistory();
  console.log("params传参", useRouteMatch());
  const toPage = (val) => {
    history.push(val);
  };
  return (
    <div className="My">
      My
      <div>params传参</div>
      <br />
      <button onClick={() => toPage("/")}>home</button>
      <br />
      <button onClick={() => toPage("/about")}>about</button>
      <br />
      <br />
    </div>
  );
}

export default My;
