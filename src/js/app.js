const formulario = document.querySelector("#formulario")
const task = document.querySelector(".tareas")
let tareas = []


function eventos(){
    formulario.addEventListener("submit" , validarFormulario)
}
eventos();


function validarFormulario(e) {
    e.preventDefault();
    const tarea = document.querySelector("#tarea").value;
    if (tarea.length < 1 ) {
        alert("formulario vacio")
        return
    }
    const objTarea = {
        id: Date.now(),
        tarea: tarea,
        estado: false
    }
    tareas = [...tareas, objTarea]
    formulario.reset();
    
    mostrarHTML();
    function mostrarHTML() {

        tareas.forEach( (item) => {
            const itemTarea = document.createElement("div")
            itemTarea.classList.add("item-tarea");
            itemTarea.innerHTML = `${item.tarea}
            <div class="botones">
                <button data-id="${item.id}" class="eliminar">x</button>
                <button data-id="${item.id}" class="completada">¡</button>
            </div>
             `
            task.appendChild(itemTarea)
        })
    }
}
    
