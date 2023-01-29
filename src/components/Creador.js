import { GuardarEnLocalStorage } from "../services/GuardarLocalStorage";

//Ahora los estados van a pertenecer al componente principal App.
//Esto es para poder comunicarse unos con otros y que se actualice todo en App sin recargar.
//Las props lo van a ir actualizando en todo momento y trayendo la información de vuelta aquí.
export const Creador = ({ setListadoPelis }) => {
  const addPeliculas = (e) => {
    //NO recarga la página al enviar formulario
    e.preventDefault();
    let datos = e.target;
    let titulo = datos.titulo.value;
    let descripcion = datos.descripcion.value;

    let pelicula = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion,
    };

    //Actualizamos el estado enviando la info a App, que a su vez se la enviará a Listado desde allí.
    //los 3 ... nos traemos lo que ya había anteriormente.
    
    setListadoPelis(elementos => {
      if (elementos != null){
        return [...elementos, pelicula];
      }else{
        return [pelicula];
      }
    });

    //Guardamos las películas en un array en el localStorage
    GuardarEnLocalStorage("listado", pelicula);
  };

  return (
    <div>
      <h3>Crear Nueva</h3>
      <form onSubmit={addPeliculas}>
        <input id="titulo" name="titulo" type="text" placeholder="Título..." />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción..."
        ></textarea>
        <input className="guardar" type="submit" value="Guardar" />
      </form>
    </div>
  );
};
