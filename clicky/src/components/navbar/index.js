import React, { Component } from "react";
import "./style.css";

class Nav extends Component {
    render() {
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
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;
 