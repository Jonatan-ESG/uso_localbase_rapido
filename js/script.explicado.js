//Crear una instacia de la base de datos | Si Existe => Guardarla en db | No Existe => Crearla => Guardarla en db
let db = new Localbase('pruebas')

//Crear una colección de objetos dentro de la base de datos
db.collection('tareas')

/*
    Funciones para manejar la base de datos indexedDB usando Localbase
*/

//Función que permite agregar una tarea a la colección, enviándole un objeto con el formato con la información de la tarea
function agregar(nuevo) {
    //Asignar un id al registro que se desea agregar
    nuevo[id] = Date.now().toString()
    //Agregar un registro a la colección
    db.collection('tareas').add(nuevo).then(() => {
        //Mostrar todos los registros de la colección
        renderizar()
    })
}

//Función que permite editar un registro al enviarle el id y un objeto con los campos que se desea actualizar
function editar(id, campos) {
    //Actualizar el registro de la colección
    db.collection('tareas').doc({ id }).update(campos).then(() => {
        //Mostrar todos los registros de la colección
        renderizar()
    })
}


//Función que permite eliminar un registro al enviarle el id
function eliminar(id) {
    //Eliminar registro de la colección
    db.collection('tareas').doc({ id }).delete().then(() => {
        //Mostrar un mensaje con el id del registro eliminado
        console.log(`Registro con id:${id} eliminado`)
        //Mostrar todos los registros de la colección
        renderizar()
    })
}

//Función que permite otener un registro, enviandole el id
function obtener(id) {
    //Obtener el registro con el id enviado
    db.collection('tareas').doc({ id }).get().then(tarea => {
        //Mostrar el registro que se obtuvo
        console.log(tarea)
    })
}

//Función que imprime por consola todos los regstros de la coleccion
function renderizar() {
    //Obtener todos los registros de la coleccion
    db.collection('tareas').get().then(tareas => {
        //Verificar si la colección tiene registros
        if (tareas.length <= 0) {
            //Imprimir por consola que no hay tareas
            console.log('No hay tareas en esta colección')
            //Terminar ejecucción de la función
            return
        }
        //Recorrer todas las tareas
        tareas.forEach(tarea => {
            //Imprimir por consola cada tarea
            console.log(tarea);
        });
    });
}