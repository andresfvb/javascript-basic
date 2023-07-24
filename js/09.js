// Operaciones en los arrglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') //Añade al final
// tecnologias.unshift('GraphQL') //Añade al inicio
// tecnologias.pop() // Elimina al final
// tecnologias.shift() // Elimina al inicio
// tecnologias.splice(2) Elimina todo desde la posicion que des
// tecnologias.splice(2, 2) Elimina todo desde la posicion que des y cuantos eliminara

// Forma de agregar al arreglo
// const nuevoArreglo = [...tecnologias, 'GraphQL'] // Agregado al final
// const nuevoArreglo = ['GraphQL',...tecnologias] // Agregal al inicio

// Filter te agrega un nuevo array, eliminando

// const nuevoArray = tecnologias.filter(function(tech){
//     // traeremos todos excepto HTML
//     return tech !== 'HTML'
// })

// Map modifica los datos sin tocar el original
const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)
