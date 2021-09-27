import ComponentB from "../components/componentB";
import { useHistory, useLocation } from "react-router-dom";

function About() {
  const history = useHistory();
  console.log("query传参", useLocation());
  const toPage = (val) => {
    history.push(val);
  };
  return (
    <div className="About">
      About
      <div>query传参</div>
      <br />
      <button onClick={() => toPage("/")}>home</button>
      <br />
      <button onClick={() => toPage("/my")}>my</button>
      <br />
      <ComponentB />
    </div>
  );
}

export default About;
