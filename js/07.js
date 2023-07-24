// Unir 2 objetos o mas
const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}
// los ... significa que realizara una copia
const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto)
