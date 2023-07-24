function sumar(numero1, numero2){
    return numero1 + numero2
}
function restar(numero1, numero2){
    return numero1 - numero2
}

//Exportamos la funcion que queremos usar en otro lado, de forma individual
// export default sumar

// Exportamos varias funciones (como objeto)
export {
    sumar,
    restar
}