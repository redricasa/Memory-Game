import React from "react";
import "./style.css";

function Nav(props) {
    console.log(props)
    var score = (props.children.props.children.props.children[1])

    // var topScore = 
    //TODO - function that establishes the top score
    // topScore(){
        // var topScore = 
    // }
    
    // TODO - function to determine if card clicked in current game
    // clicked(){

    // }
    return (
        <div className="navbar-fixed">
            <nav className= "navbar">
                <ul>
                    <li className= "brand">
                        <a href="/" > Memory Game </a>
                    </li>
                    <li>
                        {/* status updates will be displayed here */}

                    </li>
                    <li>
                        {/* score will be displayed here */}
                        <p>Score: {score} | Top Score: </p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
 