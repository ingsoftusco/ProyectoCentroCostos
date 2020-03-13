import React, {Component} from 'react';
import "./Estilo.css";
class Buscador extends Component{

   BusquedaRef= React.createRef(); 
   obtenerDatos= (e)=> {
       e.preventDefault();
       console.log(this.BusquedaRef.current.value); 

       // Tomamos el valor del input
       const termino = this.BusquedaRef.current.value
       // Lo enviamos al componente principal
       this.props.datosBusqueda(termino);
   }
   render ( ){
        return ( 
        <form onSubmit={this.obtenerDatos}>
            <div className="d-flex justify-content-center h-100">
                <p>Ruso quiere uña?</p>
                <div class="searchbar">
                    <input ref={this.BusquedaRef} className="search_input" type="text" placeholder="Palabra Clave o Código del Centro de Costos"/>
                    <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
               <div className="d-flex justify-content h-100"> 
                   
                </div>
                <div className="form-group col-md-3">
                    
                    < input type="submit" className="btn btn-lg btn-danger btn-block col-md-12"  value="Busqueda Avanzada"/>
                </div>
            </div>
        </form>
        );
    }
}
export default Buscador;