import React, { Component } from "react";
// import Card from "./components/geez/geezNums";
// import Wrapper from "./components/Wrapper";
// import json from "../images/"
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cards from "./components/geez";


class App extends Component {
//   setState for the cards
    render() {
        return (
            <div>
                <Navbar>

                </Navbar>
                <Header />
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default App;
