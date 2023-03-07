import React, { Component } from "react";

export default class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
  renderDesigners = () => {
    const designers = this.state.userData.filter(
      (item) => item.user_type === "Designer"
    );
    const designerNames = designers.map((designer) => (
      <React.Fragment key={designer.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {designer.id}</span>
          <span>Name : {designer.name}</span>
          <span>User Type: {designer.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return designerNames;
  };
  renderStartsWithJ = () => {
    const designers = this.state.userData.filter((item) =>
      item.name.startsWith("J")
    );
    const designerNames = designers.map((designer) => (
      <React.Fragment key={designer.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {designer.id}</span>
          <span>Name : {designer.name}</span>
          <span>User Type: {designer.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return designerNames;
  };
  renderAgeFiltered = () => {
    const designers = this.state.userData.filter(
      (item) => item.age > 28 && item.age <= 50
    );
    const designerNames = designers.map((designer) => (
      <React.Fragment key={designer.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {designer.id}</span>
          <span>Name : {designer.name}</span>
          <span>User Type: {designer.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return designerNames;
  };
  getTotalYearsOfDesigners = () => {
    const data = this.state.userData;
    const designersData = data.filter((item) => item.user_type === "Designer");
    const totalYears = designersData
      .map((item) => item.years)
      .reduce((total, years) => total + years, 0);
    return totalYears;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
          <h1>All designers</h1>
          <ul>{this.renderDesigners()} </ul>
          <h1>Designers with J </h1>
          <ul>{this.renderStartsWithJ()} </ul>
          <h1>
            Designers with age less than 28 and greater than or equal to 50
          </h1>
          <ul>{this.renderAgeFiltered()}</ul>
          <h1>Total experience of Designers</h1>
          <ul>{this.getTotalYearsOfDesigners()} </ul>
        </div>
      </React.Fragment>
    );
  }
}
