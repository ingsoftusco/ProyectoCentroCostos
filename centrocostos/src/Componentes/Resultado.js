import React, {Component } from 'react';
import Imagen from './Imagen';

class Resultado extends Component{
mostrarImagenes= () => {
    const imagenes= this.props.imagenes;

    // Cancele la ejecución del código cuando no retorne nada
    // Cuando esté vacío el State  
    if(imagenes.length===0) return null;

    return(
          <React.Fragment>
            <div className="col-12 p-5 row">
               { imagenes.map(imagen => (
                       <Imagen
                       key= {imagen.d}
                       imagen= {imagen}
                       />
            ))}
            </div>
          </React.Fragment>
      )
     
    }

    render (){
        return ( 
            <React.Fragment>
            {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}
export default Resultado;

