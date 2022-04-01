import React from "react";
import "./App.css";

class Historia extends React.Component{
    render(){
        return(
            <h1 className="historia">{this.props.text}</h1>
        );
    }
}

export default Historia;