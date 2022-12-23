const formulario = document.querySelector("#formulario");
let task = document.querySelector(".tareas");
let tareas = [];

function eventos() {
  formulario.addEventListener("submit", validarFormulario);
  task.addEventListener("click", eliminarTarea)
}
eventos();

function validarFormulario(e) {
  e.preventDefault();
  const tarea = document.querySelector("#tarea").value;
  if (tarea.length < 1) {
    alert("formulario vacio");
    return;
  }
  const objTarea = {
    id: Date.now(),
    tarea: tarea,
    estado: false,
  };
  tareas = [...tareas, objTarea];
  formulario.reset();
  mostrarHTML();
}


  function mostrarHTML() {

    task.innerHTML = " ";

    if(tareas.length < 1 ) {
        const mensaje = document.createElement("h5");
        mensaje.textContent = 'No has agregado ninguna tarea'
        return
    }
    tareas.forEach((item) => {
      const itemTarea = document.createElement("div");
      itemTarea.classList.add("item-tarea");
      itemTarea.innerHTML = `${item.tarea}
            <div class="botones">
                <button data-id="${item.id}" class="eliminar">x</button>
                <button data-id="${item.id}" class="completada">¡</button>
            </div>
             `;
      task.appendChild(itemTarea);
    });
  }


function eliminarTarea(e) {
    if(e.target.classList.contains("eliminar")) {
       const tareaId = Number(e.target.getAttribute("data-id"))
      const nuevaTarea = tareas.filter((item) => item.id !== tareaId )
 tareas = nuevaTarea
 mostrarHTML()
    }
    
}