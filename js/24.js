// EVENTOS DOM - Click


// Llamandola directamente - CallBack
const heading =  document.querySelector('.heading')
let entrada = 0
heading.addEventListener('click', () =>{
    if (entrada === 0){
        heading.textContent = "Primer click"
        entrada = 1
    } else {
        heading.textContent = "Segundo click"
        entrada = 0
    }
})

//LLamando a All
const enlaces = document.querySelectorAll('.navegacion a')
let aumento = 1
enlaces.forEach(enlace => {
    enlace.addEventListener('click', ()=>{
        enlace.textContent = "enlace" + aumento
        aumento++
    })
})

// Llamandola por funcion
// const heading =  document.querySelector('.heading')
// heading.addEventListener('click', clickHeading)

// function clickHeading(){
//     console.log('Hiciste click en heading')
// }

// Llamandola por variable
// const heading =  document.querySelector('.heading')
// const clickHeading = ()=>{
//     console.log('Hiciste click en heading')
// }

// heading.addEventListener('click', clickHeading)

