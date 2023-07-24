// Generar HTML

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    // el preventDEfault se usa para provar formularioas
    e.preventDefault()
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia){
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')
    console.log(alerta)
    if(nombre ==='' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    }else{
        alerta.textContent = 'Exlente, redirigiendo'
        alerta.classList.add('exito')
    }

    formulario.appendChild(alerta)

})