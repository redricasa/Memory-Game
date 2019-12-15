import React from "react";
import "./style.css";

// function creates
function Geez(props) {
    return(
        <div className="card">
            <div className="card-image">
                {/* gets name & image from props */}
                <img alt={props.name} src={props.image} onClick={props.onClick}/>  
            </div>  
            {/* <div class="card-content">
                <p><strong>{this.props.label}</strong></p>
            </div> */}
        </div>
    )
}

export default Geez;