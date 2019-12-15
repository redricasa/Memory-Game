import React from "react";
// import header from "../navbar";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  

  // handleIncrement increases this.state.count by 1
  

 
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="score">
        {/* <div className="card-header bg-primary text-white">
          score: 
        </div> */}
        <div className="score-body">
          <p className="score-text">Score: {this.state.count}</p>
          
          {/* if unique card clicked, onClick= {this.handleIncrement} if same card, reset score({this.state.count} = 0) and save score if it's the highest  */}
          
        </div>
      </div>
    );
  }
}

export default Counter;
