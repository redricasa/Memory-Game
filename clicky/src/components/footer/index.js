import React, { Component } from "react";
import "./style.css";


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12"></div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 Copyright Frederica Blissett
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;