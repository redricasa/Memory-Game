import React, { Component } from "react";
// import Card from "./components/geez/geezNums";
// import Wrapper from "./components/Wrapper";
// import json from "../images/"
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Geez from "./components/geez";
import json from "./geezNums.json";
import axios from "axios";
import shuffle from 'underscore';


class App extends Component {
    state={
        cardNums
    }

    componentDidMount(){
        this.setState({cards: Cards})

        // axios.get(

        // )
        //     .then(result=> 
        //         console.log(`Here's the geezNums.json API data: ${result.data}`))
        //     .catch( err =>
        //         console.log(`Error Message: ${err}`)
        //     )
    }

//   setState for the geez
    render() {
        const Cards = [];
        // loops through the geezNums.json
        for(let index=0;index< json.length ;index++){
            Cards
            .push(<Geez image={json[index].image} name={json[index].name} label={json[index].label} />)
        }
        return (

            <div>
                <Navbar>

                </Navbar>
                <Header />
                
                <main>
                    {Cards}
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
