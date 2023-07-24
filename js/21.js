// SCOPE - Es el alcance que tiene una variable, es decir, puedes declarar nuevamente una variable
// dentro de otra función

const precio = 300

function unaFuncion() {
    const precio = 600
    console.log("Funcion " + precio)
}

console.log(precio)

unaFuncion()