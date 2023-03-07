import React, { Component } from "react";

export class Practice extends Component {
  constructor(props) {
    super(props);
    let model = "ford figo";
    console.log("Constructor working " + props.name + " " + props.age);
    this.state = {
      name: props.name,
      age: props.age,
      id: 1,
    };
  }

  changeName = () => {
    console.log("Change name working");
    this.model = "tata nexon";
  };
  render() {
    console.log("display working");
    // let arr = [1, 2, 3, 4, 5];

    return (
      <div>
        Practice <p>{this.model}</p>
        <button onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}

export default Practice;
