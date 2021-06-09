import React from "react";
import Cardlist from "./Cardlist";
import Search from "./Search";
import "./App.css";
// import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchValue: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onSearch = (event) => {
    this.setState({ searchValue: event.target.value });
    console.log(event.target.value);
  };
  render() {
    const { robots, searchValue } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <nav className="header">
          <h1>RoboFriends</h1>
          <Search onSearch={this.onSearch} />
        </nav>

        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
