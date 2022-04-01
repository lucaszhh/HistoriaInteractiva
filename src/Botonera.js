import React from "react";
import "./App.css";

class Botonera extends React.Component{
    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={ () =>this.props.handleClick("a") }>A</button>
                    <h3>{this.props.a}</h3>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={ () =>this.props.handleClick("b") }>B</button>
                    <h3>{this.props.b}</h3>
                </div>
            </div>
        );
    }
}

export default Botonera;