// OBJETOS
// Puede guardar cualquier tipo de información y la cantidad que sea, es decir, 
// las caracteristicas del objeto.

// Asi se  crea el objeto
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

// Imprimir el atributo del objeto
console.log(producto.nombre)

//Desctructuring = te permite crear variables a partir de los atributos del objeto
const { nombre } = producto
console.log(nombre)

// Object Literal Enchacemente = Colocar variables que estan afuera, adentro de la variable
const autenticado = true
const usuario = "Andres"

const nuevoObjeto = {
    autenticado,
    usuario
}
console.log(nuevoObjeto)