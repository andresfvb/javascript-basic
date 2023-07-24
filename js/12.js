// Function - function Declaration
// Son las acciones que ocurren en una pagina web

// Tambien podemos llamarla antes de declarar la función
// sumar()

// function sumar() {
//     console.log(2 + 2)
// }
//LLamamos la función
// sumar()

// Declaramos funciones
// function sumar(numero, numeroDos) {
//     console.log(numero + numeroDos)
// }

// sumar(10, 20)

function sumar(numero, numeroDos) {
    return [ numero + numeroDos, 'Hola mundo' ]
}

const [resultado, holaMundo ] = sumar(20, 30)

console.log(resultado)
console.log(holaMundo)