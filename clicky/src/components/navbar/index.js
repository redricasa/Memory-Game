import React from "react";
import "./style.css";

function Nav(props) {
    // console.log(props.children.props.children.props.children[1])
    // render() {
        return (
            <div>
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
                            <p>the score is {props.children.props.children.props.children[1]}</p>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    // }
}

export default Nav;
 