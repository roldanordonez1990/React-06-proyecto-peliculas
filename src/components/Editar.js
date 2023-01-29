import React from "react";

export const Editar = ({peli, obtenerPeliculasLocalStorage, setEditar, setListadoPelis}) => {
  const titulo_editar = "Editar Película";

  const actualizarPeli = (e, id) =>{
    let target = e.target;
    e.preventDefault();
    //Obtenemos todas las películas por props desde el método del listado
    let getPelisAlmacenadas = obtenerPeliculasLocalStorage();
    //findIndex busca dentro de un array la condición que pongamos
    var indice = getPelisAlmacenadas.findIndex(data_peli => data_peli.id === id);
    //Conseguimos el objeto del formulario
    let peli_cambiada = {
      id: id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }
    //Sustituimos el cambio en la peli seleccionada
    getPelisAlmacenadas[indice] = peli_cambiada;
    console.log(indice, peli_cambiada)
    //Guardamos el nuevo cambio con el array en el localStorage
    localStorage.setItem("listado", JSON.stringify(getPelisAlmacenadas));
    //Seteamos el estado del listado de pelis
    setListadoPelis(getPelisAlmacenadas);
    //Cerramos el formulario de Editar
    setEditar(0);
  }
  return (
    <>
      <hr />
      <h3>{titulo_editar}</h3>
      <form onSubmit={(e)=>actualizarPeli(e, peli.id)} className="lateral_edit">
        <input id="titulo" name="titulo" type="text" placeholder="Título..." defaultValue={peli.titulo}/>
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción..."
          defaultValue={peli.descripcion}
        ></textarea>
        <div className="b-edit">
        <input className="actualizar" type="submit" value="Actualizar" />
        <input className="cancelar" type="submit" value="Cancelar" />
        </div>
      </form>
    </>
  );
};
