import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Geez from "./components/geez";
import json from "./geezNums.json";
import _ from 'underscore';


class App extends Component {
    state = {
        count: 0
    };

    constructor(props) {
        super(props);
        this.state = {count: 0};
    
        // This binding is necessary to make `this` work in the callback
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement() {

        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
        // alert(this.state.count)
    }

    componentDidMount(){
   
    }

//  setState for the geez
    render() {
        var Cards = [];
        // loops through the geezNums.json
        for(let index=0;index< json.length ;index++){
            Cards
            .push(<Geez image={json[index].image} name={json[index].name} label={json[index].label} onClick={this.handleIncrement} />)
        }
        // TODO using underscore.js for the shuffle functionality to shuffle the cards everytime on of them gets clicked
        Cards = _.shuffle(Cards)
        
        return (

            <React.Fragment>
                <Navbar>
                <div>
                    <p>the score is {this.state.count}</p>
                </div>
                </Navbar>
                <Header />
                {/* <div>
                    <p>the score is {this.state.count}</p>
                </div> */}
                
                
                <main className="container">
                    {Cards}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
