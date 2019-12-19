import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Geez from "./components/geez";
import json from "./geezNums.json";
import _ from 'underscore';


class App extends Component {
    state = {
        count: 0,
        topScore: 0,
        clickedArray: [],
        message: "click on a Ge'ez number to start!",
        
    };
    // used to instantiate an object of a class- this allows you to get props of this
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    };
    // connects to the onclick property of the image
    handleClick =(event)=> {
        if (this.state.clickedArray.includes(event)) {
        this.setState({
            count: 0,
            clickedArray: [],
            message: "Oops!! Game Over"
          });
        }; 
        if (!this.state.clickedArray.includes(event)) {
          this.setState({
            clickedArray: this.state.clickedArray.concat([event]),
            count: this.state.count + 1,
            message: "YAY!!"
          });
        };
        console.log("clicked ID",event)
        console.log("props id: ")
        // set topscore = score if score>topscore.
        if (this.state.count > this.state.topScore) {
          this.setState({ topScore: this.state.count });
        }
    }

   
    //  setState for the geez
    render() {
        
        var Cards = [];
        // loops through the geezNums.json and renders images
        for(let index=0;index< json.length ;index++){
            Cards
            .push(
                // calls the geez function in geez/index.js
                <Geez 
                    image={json[index].image} 
                    name={json[index].name} 
                    label={json[index].label} 
                    onClick={this.handleClick} 
                    id={json[index].id}
                    key={json[index].id}
                />
            )
        }
        //using underscore.js for the shuffle functionality to shuffle the cards everytime on of them gets clicked
        Cards = _.shuffle(Cards)
        console.log(Cards)
        return (
            
            <React.Fragment>
                <Navbar>
                {/* this sets the props object for count so that the navbar component gets props. (any) word is needed as well or there won't be a number! */}
                
                <div>
                    <ul>
                        score={this.state.count}
                        message={this.state.message}
                        topScore={this.state.topScore}
                        
                    </ul>
                </div>
                
                </Navbar>
                <Header />  
                {/* the main tag keeps the images together and formats it in a way where they maintain their proportions */}
                <main className="container">
                    {Cards}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
