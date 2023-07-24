// Objetos - Manipulación

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}
// Object.freeze(producto) - No permite modificar el objeto
// Object.seal(producto) - Permite modificar propiedades existentes, no permite 
// añadir ni eliminar

// Reescribir valor
producto.nombre = "Monitor Curvo"

// Agregar imagen, debe ser algo que no exista
producto.imagen = "img.jpg"

// Eliminar valor del objeto
delete producto.disponible

console.table(producto)

Object.freeze(producto)
