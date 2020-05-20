const crearMensaje = (nombre, mensaje) => {
    return {
        nombre,
        mensaje,
        hora: new Date().getTime()
    }
}
module.exports = {
    crearMensaje
}