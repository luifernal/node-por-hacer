const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de las tareas por hacer'
}

const argv = require('yargs')
    .command('actualizar', 'actualiza el estado completado de una tarea ', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }

    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}