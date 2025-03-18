//* Lista para almacenar los nombres
let nombres = [];

// Referencias a los elementos del DOM
const inputNombre = document.getElementById("nombreInput");
const listaNombres = document.getElementById("listaNombres");
const botonAdicionar = document.getElementById("btnAdicionar");
const botonSortear = document.getElementById("btnSortear");
const resultadoSorteo = document.getElementById("resultado");

//* Agregar nombre a la lista
botonAdicionar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = ""; // Limpiar campo
});

//* Actualizar la lista en pantalla
function actualizarLista() {
    listaNombres.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

//* Realizar sorteo
botonSortear.addEventListener("click", () => {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const ganador = nombres[indiceAleatorio];
    resultadoSorteo.textContent = `El amigo secreto es: ${ganador}`;
});
