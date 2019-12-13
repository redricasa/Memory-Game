import React, { Component } from "react";
import "./style.css";


class App extends Component {
    // console.log(props);
    render() {
        return(
            // <div className = "card">
            //     <div className= "img-container">
            //         <img alt={props.name} src={props.image} />
            //     </div>
            // </div>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/sample-1.jpg"/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
 

export default App;