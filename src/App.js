import React from "react";

import Historia from "./Historia.js";
import Botonera from "./Botonera.js";
import Elecciones from "./Elecciones.js";

import data from "./components/data.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eleccion: "",
      contador: 2,
      combinacion: 1,
      listadoDeElecciones: [],

    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(valor) {
    this.setState({
      eleccion: valor,
      contador: ( this.state.contador + 1 ),
      combinacion: this.state.contador + valor,
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.state.listadoDeElecciones.push(this.state.eleccion);
    }
    if (this.state.contador >= 7) {
      alert("Has llegado al final de la historia gracias por ver");
    }
  }



  
  render() {

    return (
      <div className="layout">
        {(this.state.contador === 7)
        ?
        <div className="fin">
          <h1>FIN</h1>
          <p className="amor">Trabajo realizado por kq con mucho amor</p>
          <button className="botones" onClick={() => window.location.reload(true)}>Volver a leer</button>
        </div>
        :<></>
        }
        {( this.state.combinacion === 1 )
          ? 
            <>
              <Historia 
                text = { data[0].historia } />
              <Botonera
                handleClick = { this.handleClick }
                a = { data[0].opciones.a }
                b = { data[0].opciones.b } />
              <Elecciones
                eleccion = {this.state.eleccion}
                listado = {this.state.listadoDeElecciones}/>
            </>

          : data
            .filter( element => element.id === this.state.combinacion)
            .map( element => (
              <>
                <Historia 
                  text = { element.historia } />
                <Botonera
                  handleClick = { this.handleClick }
                  a = { element.opciones.a }
                  b = { element.opciones.b } />
                <Elecciones
                  eleccion = {this.state.eleccion}
                  listado = {this.state.listadoDeElecciones.map(
                    (e, index) => ( <li key={index}><h3 className="upper">{e}</h3></li>) ) } />
                  
              </>
            ))
        }
      </div>
    );
  }
}

export default App;
