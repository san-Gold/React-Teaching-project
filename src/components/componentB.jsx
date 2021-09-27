import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateActionName,
  //   updateActionAge,
  updateActionHeight,
} from "../store/actions/userInfoAction";

import { updateAges } from "../utils/index";

function ComponentB(props) {
  const [info, setinfo] = useState({
    name: "",
    age: "",
    height: "",
  });
  let [name, age, height] = [
    useSelector((state) => state.userInfo.name),
    useSelector((state) => state.userInfo.age),
    useSelector((state) => state.userInfo.height),
  ];
  const dispatch = useDispatch();

  const updateName = () => {
    dispatch(updateActionName(info.name));
  };
  const updateAge = () => {
    updateAges(info.age);
  };
  const updateHeight = () => {
    dispatch(updateActionHeight(info.height));
  };
  const inputChange = (name, val) => {
    console.log(name, val);
    setinfo((e) => {
      return {
        ...e,
        [name]: val,
      };
    });
  };
  return (
    <div>
      <h1>函数式组件</h1>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>身高：{height}</p>
      <div>
        <input
          type="text"
          placeholder="name"
          value={info.name}
          onChange={(e) => {
            inputChange("name", e.target.value);
          }}
        />
        <button onClick={updateName}>updateName</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="age"
          value={info.age}
          onChange={(e) => {
            inputChange("age", e.target.value);
          }}
        />
        <button onClick={updateAge}>updateAge</button>
      </div>
      <h4>这个是异步存值</h4>
      <div>
        <input
          type="text"
          placeholder="height"
          value={info.height}
          onChange={(e) => {
            inputChange("height", e.target.value);
          }}
        />
        <button onClick={updateHeight}>updateHeight</button>
      </div>
    </div>
  );
}
export default ComponentB;
