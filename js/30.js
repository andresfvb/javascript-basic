// Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

// const consultarApi = ()=>{
//     fetch(url).then( respuesta=> respuesta.json() )
//         .then((resultado)=>{
//             resultado.forEach(comentario =>{
//                 console.log(comentario)
//             })
//         })
// }

const consultarApi = async ()=>{
    const respuesta = await  fetch(url)
    console.log('Despues de respuesta')
    const resultado = await respuesta.json()
    console.log('Despues de resultado')

    
}

consultarApi()