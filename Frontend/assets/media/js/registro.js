const formulario = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  //ESCRIBIR FILAS
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/83ea4ff9-14ab-4243-ba37-d98e621a4b99",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NOMBRE: formulario.nombre.value,
          CORREO: formulario.correo.value,
          TELEFONO: formulario.telefono.value,
        }),
      }
    );

    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }

  //LEER FILAS
  /*
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/83ea4ff9-14ab-4243-ba37-d98e621a4b99"
    );
    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }
*/

  //ELIMINAR FILAS

  /*
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/83ea4ff9-14ab-4243-ba37-d98e621a4b99/2",
      {
        method: "DELETE",
      }
    );

    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }
*/
  //ACTUALIZAR FILAS
  /*
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/83ea4ff9-14ab-4243-ba37-d98e621a4b99/6",
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CORREO: "marti@hola.com",
        }),
      }
    );

    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }
  */

  registro.classList.remove("activo");
  exito.classList.add("activo");
});
