let db = new Localbase('pruebas')

db.collection('tareas')

function agregar(nuevo) {
    nuevo[id] = Date.now().toString()
    db.collection('tareas').add(nuevo).then(() => {
        renderizar()
    })
}

function editar(id, campos) {
    db.collection('tareas').doc({ id }).update(campos).then(() => {
        renderizar()
    })
}


function eliminar(id) {
    db.collection('tareas').doc({ id }).delete().then(() => {
        console.log(`Registro con id:${id} eliminado`)
        renderizar()
    })
}

function obtener(id) {
    db.collection('tareas').doc({ id }).get().then(tarea => {
        console.log(tarea)
    })
}

function renderizar() {
    db.collection('tareas').get().then(tareas => {
        if (tareas.length <= 0) {
            console.log('No hay tareas en esta colección')
            return
        }
        tareas.forEach(tarea => {
            console.log(tarea);
        });
    });
}