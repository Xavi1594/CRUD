const formulario = document.querySelector("#formulario");
let task = document.querySelector(".tareas");
let total = document.querySelector(".datos__total");
let completadas = document.querySelector(".datos__completadas");
let tareas = [];

function eventos() {
  formulario.addEventListener("submit", validarFormulario);
  task.addEventListener("click", eliminarTarea);
  task.addEventListener("click", tareaCompletada);
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

  if (tareas.length < 1) {
    const mensaje = document.createElement("h5");
    mensaje.textContent = "No has agregado ninguna tarea";
    return;
  }
  tareas.forEach((item) => {
    const itemTarea = document.createElement("div");
    itemTarea.classList.add("item-tarea");
    itemTarea.innerHTML = `
    ${item.estado ? ( 
        `<p class="completa">${item.tarea}</p>`
    ) : (
    `<p>${item.tarea}</p>`
    )}
            <div class="botones">
                <button data-id="${item.id}" class="eliminar">x</button>
                <button data-id="${item.id}" class="completada">¡</button>
            </div>
             `;
    task.appendChild(itemTarea);
  });
  const totalTareas = tareas.length
  total.textContent = `Total tareas: ${totalTareas}`
  const tareaCompletada = tareas.filter( item => item.estado === true).length
completadas.textContent = `completadas: ${tareaCompletada}`
}

function eliminarTarea(e) {
  if (e.target.classList.contains("eliminar")) {
    const tareaId = Number(e.target.getAttribute("data-id"));
    const nuevaTarea = tareas.filter((item) => item.id !== tareaId);
    tareas = nuevaTarea;
    mostrarHTML();
  }
}

function tareaCompletada(e) {
  if (e.target.classList.contains("completada")) {
    const tareaId = Number(e.target.getAttribute("data-id"));
    const nuevaTarea = tareas.map((item) => {
      if (item.id === tareaId) {
        item.estado = !item.estado;
        return item;
      } else {
        return item;
      }
    });
    mostrarHTML();
  }
}
