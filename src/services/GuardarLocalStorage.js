export const GuardarEnLocalStorage = (key, item) => {
  //Conseguir los elementos que ya hay en el localStorage.
  let elementos = JSON.parse(localStorage.getItem(key));

  //Comprobamos si es un array (o que el localStorage devuelva algo)
  if (Array.isArray(elementos)) {
    //Añadimos la nueva peli al array de pelis si el localStorage viene con algo
    elementos.push(item);
  } else {
    //Si aún no tiene nada el localStorage, metemos a pelo un array en elementos
    elementos = [item];
  }
  //Guardamos en localStorage el array
  localStorage.setItem(key, JSON.stringify(elementos));
  console.log("Mostramos el Array");
  console.log(elementos);
  //Devolvemos el objeto para tenerlo
  return item;
};
