import { useHistory } from "react-router-dom";
function Page404() {
  const history = useHistory();
  const toPage = (val) => {
    history.push(val);
  };
  return (
    <div className="Page404">
      404页面
      <br />
      <button onClick={() => toPage("/")}>home</button>
      <br />
      <button onClick={() => toPage("/about")}>about</button>
      <br />
      <button onClick={() => toPage("/my/111")}>my</button>
      <br />
    </div>
  );
}

export default Page404;
