import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    // renders jumbotron
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Memory Game</h1>
                    <h4 className="lead">Click on the images showing Ge'ez numbers. Make sure it's a unique one or you'll have to start all over!</h4>
                </div>
            </div>
        )
    }
}

export default Header;