// EVENTOS DEL DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    // el preventDEfault se usa para provar formularioas
    e.preventDefault()
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    if(nombre ==='' || password === ''){
        console.log('Todos los campos son obligatorios')
    }else{
        console.log('Excelente, redirigiendo....')
    }
    console.log(nombre)
    console.log(password)
    console.log('Enviaste un formulario')
})