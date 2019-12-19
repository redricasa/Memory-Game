import React from "react";
import "./style.css";

// function creates
function Geez(props) {
    console.log("Geez compponent props:", props)
    return(
        <div className="card">
            <div className="card-image">
                {/* gets name & image as well as onclick function from props */}
                <img 
                    alt={props.name} 
                    src={props.image} 
                    onClick={() => props.onClick(props.id)}
                />  
            </div>  
        </div>
    )
}

export default Geez;