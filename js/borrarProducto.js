import { conexionDatos } from "./datos.js";

const imagen = document.querySelectorAll("[data-borrar]");

console.log(imagen);

async function peticionEliminar(e){
    e.preventDefault();
}


imagen.addEventListener("click", e=> console.log( imagen.id));
