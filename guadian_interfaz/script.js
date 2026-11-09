// Buscamos los elementos del HTML
const contenedor = document.getElementById("contenedor-bienvenida");
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const color = document.getElementById("color-fondo");
const tema = document.getElementById("tema");
const restablecer = document.getElementById("restablecer");

/**
 * Aplica el tema seleccionado por el usuario.
 * Añade la clase correspondiente al elemento body y elimina la contraria.
 * @returns {void}
 */
// Cambiamos el tema según la opción seleccionada
function aplicarTema() {
    if (tema.value === "oscuro") {
        document.body.classList.add("oscuro");
        document.body.classList.remove("claro");
    } else {
        document.body.classList.add("claro");
        document.body.classList.remove("oscuro");
    }
}
/**
 * Muestra un mensaje de bienvenida utilizando el nombre introducido.
 * Limpia previamente el contenedor para evitar mensajes duplicados.
 * @returns {void}
 */
// Creamos el mensaje de bienvenida
function mostrarBienvenida() {
    // Limpiamos el contenedor para no duplicar el mensaje
    contenedor.textContent = "";

    if (nombre.value.trim() !== "") {
        const titulo = document.createElement("h2");
        titulo.textContent = `¡Bienvenido de nuevo, ${nombre.value}!`;

        const parrafo = document.createElement("p");
        parrafo.textContent = "Nos alegra tenerte por aquí de nuevo.";

        contenedor.appendChild(titulo);
        contenedor.appendChild(parrafo);
    }
}
/**
 * Actualiza el color de fondo de la página cuando el usuario modifica el selector.
 */
color.addEventListener("input", () => {
    document.body.style.backgroundColor = color.value;
});
/**
 * Detecta el cambio de tema y aplica el estilo correspondiente.
 */
// El tema cambia al seleccionar una opción
tema.addEventListener("change", () => {
    aplicarTema();
});
/**
 * Guarda el nombre, el color y el tema seleccionados mediante cookies.
 * Las cookies tienen una duración de siete días.
 * @returns {void}
 */
// Guardamos las preferencias en cookies
function guardar() {
    const fecha = new Date();
    //añadimos 7 días a la fecha actual para que la cookie caduque en una semana
    fecha.setDate(fecha.getDate() + 7);
    // Guardamos las preferencias en cookies con la fecha de caducidad
    document.cookie = `nombre=${encodeURIComponent(nombre.value)}; expires=${fecha.toUTCString()}; path=/`;
    // Guardamos el color seleccionado en una cookie
    document.cookie = `color=${color.value}; expires=${fecha.toUTCString()}; path=/`;
    // Guardamos el tema seleccionado en una cookie
    document.cookie = `tema=${tema.value}; expires=${fecha.toUTCString()}; path=/`;

    mostrarBienvenida();
}
/**
 * Gestiona el envío del formulario y evita que la página se recargue.
 */
// Al enviar el formulario, guardamos las preferencias
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    guardar();
});
/**
 * Busca una cookie por su nombre y obtiene su valor.
 * @param {string} claveBuscada - Nombre de la cookie que se desea buscar.
 * @returns {string|null} Valor encontrado o null si la cookie no existe.
 */
// Buscamos una cookie por su nombre
function obtenercookies(claveBuscada) {
    const cookies = document.cookie.split("; ");

    for (let par of cookies) {
        const posicion = par.indexOf("=");
        const clave = par.substring(0, posicion);
        const valor = par.substring(posicion + 1);

        if (clave === claveBuscada) {
            return decodeURIComponent(valor);
        }
    }

    return null;
}
/**
 * Recupera de las cookies las preferencias guardadas anteriormente.
 */
// Recuperamos las preferencias guardadas
const nombreGuardado = obtenercookies("nombre");
const colorGuardado = obtenercookies("color");
const temaGuardado = obtenercookies("tema");

// Recuperamos el nombre
if (nombreGuardado !== null) {
    nombre.value = nombreGuardado;
}

// Recuperamos el color
if (colorGuardado !== null) {
    color.value = colorGuardado;
    document.body.style.backgroundColor = colorGuardado;
}

// Recuperamos el tema
if (temaGuardado !== null) {
    tema.value = temaGuardado;
} else {
    tema.value = "claro";
}

aplicarTema();
mostrarBienvenida();

// Restablecemos la página a sus valores iniciales
function restablecerInterfaz() {
    // Eliminamos las cookies
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "tema=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Quitamos el color y las clases del tema
    document.body.style.backgroundColor = "";
    document.body.classList.remove("claro");
    document.body.classList.remove("oscuro");

    // Vaciamos los campos del formulario
    nombre.value = "";
    color.value = "#ffffff";
    tema.value = "claro";

    // Eliminamos el mensaje de bienvenida
    contenedor.textContent = "";
}

// Al pulsar el botón, restablecemos la interfaz
restablecer.addEventListener("click", () => {
    restablecerInterfaz();
});