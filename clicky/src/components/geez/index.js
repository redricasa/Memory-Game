import React from "react";
import "./style.css";
// import "./geezNums.json"

class Geez extends React.Component {
    state={
        // image:""
    }
    // console.log(props);
    render() {
        return(
            // <div className = "card">
            //     <div className= "img-container">
            //         <img alt={props.name} src={props.image} />
            //     </div>
            // </div>
           
                    <div className="card">
                        <div className="card-image">
                            {/* gets name & image from props */}
                            <img alt={this.props.name} src={this.props.image} onClick={this.props.onClick}/>  
                        </div>  
                        <div class="card-content">
                            <p><strong>{this.props.label}</strong></p>
                        </div>
                    </div>
           
        )
    }

}
 

export default Geez;