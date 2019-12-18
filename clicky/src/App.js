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
        message: "click on a Ge'ez number to start!"
    };
    
    // constructor(props) {
    //     super(props);
    //     this.state = {count: 0};
    
    //     // This binding is necessary to make `this` work in the callback
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // --------------------
    //function that resets game by setting score=0 
    // newGame(){
    //     this.setState({count: 0})
    // }
    // =====================
    // handleIncrement() {
    //     // We always use the setState method to update a component's state
    //     this.setState({ count: this.state.count + 1 });
    //     // alert(this.state.count)
    // }

    clickPicture = clickedId => {
        
        
        // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
        if (this.state.clickedArray.includes(clickedId)) {
          this.setState({
            count: 0,
            clickedArray: [],
            message: "Oops!! Game Over"
          });
        } else {
          this.setState({
            clickedArray: this.state.clickedArray.concat([clickedId]),
            count: this.state.count + 1,
            message: "YAY!!"
          });
        };
        console.log("clicked ID",clickedId)
        // set topscore = score if score>topscore.
        if (this.state.count > this.state.topScore) {
          this.setState({ topScore: this.state.count });
        }
    };
    
//  setState for the geez
    render() {
        
        var Cards = [];
        // loops through the geezNums.json and renders images
        for(let index=0;index< json.length ;index++){
            Cards
            .push(
                <Geez 
                    image={json[index].image} 
                    name={json[index].name} 
                    label={json[index].label} 
                    // TODO map out onclick function in console
                    onClick={this.clickPicture} 
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
