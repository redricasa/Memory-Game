import React from "react";
import "./style.css";


class App extends React.Component {
    state={
        image:""
    }
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
                            {/* replace with this.state.image */}
                            <img alt={this.state.name} src={this.state.image}/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
 

export default App;