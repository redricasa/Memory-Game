import React from "react";
import "./style.css";

function Nav(props) {
    console.log("Navbar props: ", props)
    var score = (props.score)
    var topScore = (props.topScore)
    var message = (props.message)
    console.log("score: ", score)
    console.log("message: ", message  )
    console.log("top score: ",  topScore)
  
    return (
        <div className="navbar-fixed">
            <nav className= "navbar">
                <ul>
                    <li className= "brand">
                        {/* the a tag and href gives the sections their own space */}
                        <a href="/" > Memory Game </a>
                    </li>
                    <li className= "msg">
                        {/* status updates will be displayed here */}
                        <a href="#!">{message}</a>
                    </li>
                    <li className= "score">
                        {/* score will be displayed here */}
                        <a href="#!">Score: {score} | Top Score: {topScore} </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
