// EVENTOS DEL DOM - Inputs

let caracteres = 10
const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', (texto)=>{
    console.log("Escribiendo")
    caracteres--
    console.log(texto.target.value)
    console.log(caracteres)
})

//Mostrar constraseña solo por unos segundos
const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e){
    inputPassword.type = 'text'

    setTimeout (()=>{
        inputPassword.type= 'password'
    }, 1000)
}
