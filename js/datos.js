async function listaProductos(){
    const conexion = await fetch("http://localhost:3000/productos");
    const data = conexion.json();
    return data
}

async function enviarProducto(nombre, precio, imagen, id){
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen,
            id:id
        })
    });
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al mandar el producto");
    }

    return conexionConvertida;
}

async function borrarProducto(id){
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "DELETE",
        id:id
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionDatos = {
    listaProductos, enviarProducto, borrarProducto
}