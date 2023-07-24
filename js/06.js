// Objetos - Destructuring con 2 o mas objetos

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

const {nombre, precio, disponible} = producto
//Como 'nombre' ya existe,, crearemos un alias
const {nombre: nombreCliente, premium} = cliente

console.log(nombre + ' ' + nombreCliente)