import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateActionName,
  //   updateActionAge,
  updateActionHeight,
} from "../store/actions/userInfoAction";

import { updateAges } from "../utils/index";

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
    };
  }
  updateName = () => {
    this.props.updateName(this.state.name);
  };
  updateAge = () => {
    updateAges(this.state.age);
  };
  updateHeight = () => {
    this.props.updateHeight(this.state.height);
  };
  inputChange(name, val) {
    this.setState({
      [name]: val,
    });
  }
  render() {
    let { name, age, height } = this.props;
    return (
      <div>
        <h1>class式组件</h1>
        <p>姓名：{name}</p>
        <p>年龄：{age}</p>
        <p>身高：{height}</p>
        <div>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={(e) => {
              this.inputChange("name", e.target.value);
            }}
          />
          <button onClick={this.updateName}>updateName</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="age"
            value={this.state.age}
            onChange={(e) => {
              this.inputChange("age", e.target.value);
            }}
          />
          <button onClick={this.updateAge}>updateAge</button>
        </div>
        <h4>这个是异步存值</h4>
        <div>
          <input
            type="text"
            placeholder="height"
            value={this.state.height}
            onChange={(e) => {
              this.inputChange("height", e.target.value);
            }}
          />
          <button onClick={this.updateHeight}>updateHeight</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    name: store.userInfo.name,
    age: store.userInfo.age,
    height: store.userInfo.height,
  }),
  (dispatch) => ({
    updateName: (value) => {
      console.log(value);
      dispatch(updateActionName(value));
    },
    updateHeight: (value) => {
      dispatch(updateActionHeight(value));
    },
  })
)(ComponentA);
