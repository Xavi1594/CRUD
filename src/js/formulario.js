export 
function eventos() {
  formulario.addEventListener("submit", validarFormulario);
  task.addEventListener("click", eliminarTarea);
  task.addEventListener("click", tareaCompletada);
}
eventos();