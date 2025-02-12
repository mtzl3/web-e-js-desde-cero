// Variable aleatoria
let nota = Math.floor(Math.random() * 101);

// Verificar si la nota es un valor válido
if (nota >= 0 && nota <= 100) {
    let mensaje;
    if (nota >= 90) {
        mensaje = "Excelente";
    } else if (nota >= 75) {
        mensaje = "Bien";
    } else if (nota >= 60) {
        mensaje = "Suficiente";
    } else {
        mensaje = "No aprueba";
    }
    console.log(`Nota: ${nota}. Estatus: ${mensaje}`);
} else {
    console.log("Tú nota debe estar entre 0 y 100.");
}
