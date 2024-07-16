import { conexionDatos } from "./datos.js";

const contenedor = document.querySelector("[data-productos]");
const ultimaCard = contenedor.parentNode.lastChild;

export default function crearCard(imagen, nombre, precio, id){
    const producto = document.createElement("div");
    producto.className = "card-producto";
    producto.setAttribute("id", id);
    producto.innerHTML = `
        <img class="imagen-producto" alt="${nombre}" src="${imagen}">
                    <div class="card-producto-info">
                        <p class="nombre-producto">${nombre}</p>
                        <div class="card-producto-precio">
                            <p class="precio">$${precio},00</p>
                            <img class="borrar-producto" alt="Borrar" src="./recursos/trash.png" id="${id}" data-borrar>
                        </div>
                    </div>
    `;
    return producto;
}

async function listaProductos(){
    try{
        const listaAPI = await conexionDatos.listaProductos();

        listaAPI.forEach(producto => contenedor.appendChild(crearCard(producto.imagen, producto.nombre, producto.precio, producto.id)));
    } catch{
        contenedor.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :(</h2>`
    }
}

listaProductos();