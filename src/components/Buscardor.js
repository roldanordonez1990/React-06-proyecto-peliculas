import React, { useState } from "react";

export const Buscardor = ({listadoPelis, setListadoPelis}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontado] = useState(false);
 
  const buscarPeli = (e) =>{
    e.preventDefault();
    //Actualizamos en el momento el título con el evento
    setBusqueda(e.target.value);

    let peli_encontrada = listadoPelis.filter(peli =>{
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    })
  
    if(peli_encontrada <= 0 || busqueda.length <= 1 ){
      peli_encontrada = JSON.parse(localStorage.getItem("listado"));
      setNoEncontado(true);
    }else{
      setNoEncontado(false);
    }

    console.log(peli_encontrada)
    setListadoPelis(peli_encontrada);
  }

  return (
    <div>
      <p><strong>Buscador: </strong>{busqueda}</p>
      {(noEncontrado && busqueda.length > 1) && (<span className="not-found">No hay resultados</span>)}
      <form onSubmit={buscarPeli}>
        <input onChange={(e)=>buscarPeli(e)} type="text" placeholder="Buscador..." />
        <input className="buscar" type="submit" value="Buscar" />
      </form>
    </div>
  );
};
