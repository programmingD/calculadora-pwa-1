/* DEBES TENER EL ARCHIVO MANIFEST CON TOSOS LOS PARAMETROS PARA QUE FUNCIONE */
/* Validacion y registro del service worker */
if('serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.js")
    .then(reg => console.log("Registro de serviceWorker exitoso ",reg))
    .catch(err => console.warn("Error al registrar el serviceWorker", err))
}