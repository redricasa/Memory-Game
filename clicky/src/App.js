import React, { Component } from "react";
import Card from "./components/geez";
import Wrapper from "./components/Wrapper";
// import json from "../images/"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    geez
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.geez.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
