import React from "react";
import "./style.css";

// function creates
function Geez(props) {
    // console.log("Geez compponent:"+ JSON.stringify(props))
    return(
        <div className="card">
            <div className="card-image">
                {/* gets name & image from props */}
                <img alt={props.name} src={props.image} onClick={props.onClick}/>  
            </div>  
        </div>
    )
}

export default Geez;