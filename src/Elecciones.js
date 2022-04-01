import React from "react";


class Elecciones extends React.Component{
    render(){
        return(
            <div className="recordatorio">
                <h3>Eleccion anterior: <span className="upper">{this.props.eleccion}</span></h3>
                <h3>Historial de elecciones:</h3>
                <ul>{this.props.listado}</ul>
            </div>
        )
    }
}

export default Elecciones;