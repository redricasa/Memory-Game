import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    // renders jumbotron
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Memory Game</h1>
                    <p class="lead">Click on the images showing Ge'ez numbers. Make sure it's a unique one or you'll have to start all over!</p>
                </div>
            </div>
        )
    }
}

export default Header;