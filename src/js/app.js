const formulario = document.querySelector("#contenedor__formulario")

function eventos(){
    formulario.addEventListener("submit" , validarFormulario)
}
eventos();


function validarFormulario(e) {
    e.preventDefault();
    const tarea = document.querySelector("#formulario__tarea").value;
    console.log(tarea);
}
    
