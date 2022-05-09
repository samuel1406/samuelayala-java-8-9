class Cliente {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}

// esta es una funcion de nombre
// 
function esMayorDeEdad() {
  let nombre = localStorage.getItem("nombre");
  if (nombre == null) {
    nombre = prompt("ingrese su nombre");
  }
  localStorage.setItem("nombre", nombre);
  if (nombre < 18) {
    alert("Franchesca's Fast Food!");
    return false;
  } else {
    alert(
      "Bienvenido a Franchesca's Fast Food!, ingrese datos en el formulario y en breve tomaremos su pedido"
    );
    return true;
  }
}

//capturo el boton y le agrego el escuchador del evento onClick y la funcion que debe disparar
let boton = document.getElementById("enviarInfo");
boton.addEventListener("click", cargarCliente);

// capturar elementos
function cargarCliente() {
  let nombre = document.getElementById("name").value;
  let telefono = document.getElementById("phone").value;
  let direccion = document.getElementById("adress").value;
  let cliente1 = new Cliente(nombre, telefono, direccion);
  console.log(cliente1);
  mostrarCliente(cliente1);
}
//eliminar elementos
function mostrarCliente(cliente) {
  let formulario = document.getElementById("customer");
  formulario.innerHTML = "";
  //agregar elementos
  let nuevoContenido = document.createElement("div");
  nuevoContenido.innerHTML = `Gracias  ${cliente.nombre} ! sus datos fueron registrados y en breve
  recibira su pedido en ${cliente.direccion}`;

  nuevoContenido.className = "info-cliente";
  document.body.appendChild(nuevoContenido);
}

if (!esMayorDeEdad()) {
  let formulario = document.getElementById("customer");
  formulario.parentNode.removeChild(formulario);
}
