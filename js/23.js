const heading = document.querySelector('.heading') // Selector por ID
heading.textContent = 'Un nuevo Heading' // Reemplazamos texto en el HTML
console.log(heading)


const inputNombre = document.querySelector('#nombre')
inputNombre.value = "Valor por default" //Agregamos el value de un input

//ITerar para el querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a')
// enlaces[0].textContent = "Menu" // Modificar uno solo
// enlaces.forEach(enlaces => enlaces.textContent = "Menu")//Modicar 
console.log(enlaces)

