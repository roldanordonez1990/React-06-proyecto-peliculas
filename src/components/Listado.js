import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

//Ahora los estados van a pertenecer al componente principal App.
//Esto es para poder comunicarse unos con otros y que se actualice todo en App sin recargar
//Las props lo van a ir actualizando en todo momento y trayendo la información de vuelta aquí.
export const Listado = ({ listadoPelis, setListadoPelis }) => {
  //const [listadoPelis, setListadoPelis] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    obtenerPeliculasLocalStorage();
  }, []);

  const obtenerPeliculasLocalStorage = () => {
    var peliculas = JSON.parse(localStorage.getItem("listado"));
    setListadoPelis(peliculas);
    return peliculas;
  };

  const borrarPeli = (e, id) => {
    //Obtenemos primero todas las películas
    var peliculas_almacenadas = obtenerPeliculasLocalStorage();
    //Filtramos en un nuevo array todas las pelis menos la que hemos borrado
    var array_peliculas_modificafas = peliculas_almacenadas.filter(dataPelis => dataPelis.id !== parseInt(id)
    );
    //Actualizamos el listado en el setListadoPelis el nuevo array
    setListadoPelis(array_peliculas_modificafas);
    //Actualizamos el localStorage
    localStorage.setItem("listado", JSON.stringify(array_peliculas_modificafas)
    );
  };

  //Este método sirve para controlar cuando el localStorage queda vacío [] 
  //Cuando borro todos los item con el método borrarPeli, el array queda vacío pero el localStorage sigue existiendo
  //para que apareza "No hay películas", ya que al vaciar todo el array, queda vacío pero no null.
  //lo pongo a parte para poder usarlo y llamarlo en la condición.
  const controlNuevoArrayVacio = (e) => {
    var control_array = JSON.parse(localStorage.getItem("listado"));
    if (control_array != null) {
      if (control_array.length > 0) {
        
        return 1;
      }
    } else {
        
        return 0;
    }
  };

  return (
    <>
      {listadoPelis != null && controlNuevoArrayVacio() === 1 ? (
        listadoPelis.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <strong>Título:</strong> {peli.titulo}
              <p>
                <strong>Descripcion:</strong> {peli.descripcion}
              </p>
              <input onClick={()=> setEditar(peli.id)} className="edit" type="submit" value="Editar" />
              <input
                onClick={(e) => borrarPeli(e, peli.id)}
                className="delete"
                type="submit"
                value="Borrar"
              />
              {editar === peli.id && <Editar peli={peli} 
                                             obtenerPeliculasLocalStorage={obtenerPeliculasLocalStorage}
                                             setEditar={setEditar}
                                             setListadoPelis={setListadoPelis}/>}
            </article>
          );
        })
      ) : (
        <div className="peli-item2">
          <strong>No hay películas en la lista</strong>
        </div>
      )}
    </>
  );
};
