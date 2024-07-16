import { conexionDatos } from "./datos.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const id = "7";

    try{
        await conexionDatos.enviarProducto(nombre, precio, imagen, id);
        alert("Producto añadido correctamete");
    } catch(e){
        alert(e)
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento));