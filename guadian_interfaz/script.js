//buscamos el contenedor
const contenedor=document.getElementById("contenedor-bienvenida");
const formulario=document.getElementById("formulario");
const nombre=document.getElementById("nombre");
const color=document.getElementById("color-fondo");
const tema=document.getElementById("tema");
const restablecer=document.getElementById("restablecer");
//crea el titulo
    const titulo=document.createElement("h2");
    //llena el titulo
    titulo.textContent=("Bienvenido de nuevo:]")
    const parrafo=document.createElement("p");
    parrafo.textContent=("nos alegra tenerte por aqui de nuevo")
    contenedor.appendChild(titulo);
    contenedor.appendChild(parrafo);

color.addEventListener("input",()=>{
    document.body.style.backgroundColor=color.value;
});
tema.addEventListener("change",()=>{
    if(tema.value==="oscuro"){
        document.body.classList.add("oscuro");
        document.body.classList.remove("claro");
    }else{
        document.body.classList.add("claro");
        document.body.classList.remove("oscuro");
    }
});
function guardar(){
    const fecha=new Date();
    //sumamos 7 dias a la fecha actual
    fecha.setDate(fecha.getDate()+7);
    //guardamos el nombre durante 7 dias
    document.cookie=`nombre=${nombre.value};expires=${fecha.toUTCString()};path=/`;
    //guardamos el color durante 7 dias
    document.cookie=`color=${color.value};expires=${fecha.toUTCString()};path=/`;
    //guardamos el tema durante 7 dias
    document.cookie=`tema=${tema.value};expires=${fecha.toUTCString()};path=/`;
}
formulario.addEventListener("submit",(event)=>{
    //evitamos que se recargue la pagina
    event.preventDefault();
    guardar();
});
function obtenercookies(){
//todas las cookies
const cookies=document.cookie.split("; ");
//recorremos las cookies
for(let par of cookies){
    const[clave,valor]=par.split("=");
    if(clave==="nombre"){
        nombre.value=valor;
        return valor;
    }
    return null;
}
}

const temaguardado = document.cookie.split("; ").find(par => par.startsWith("tema="));
//si hay un tema guardado, lo aplicamos
if (temaguardado) {
    tema.value = temaguardado.split("=")[1];
    if(tema.value==="oscuro"){
        document.body.classList.add("oscuro");
        document.body.classList.remove("claro");
    }else{
        document.body.classList.add("claro");
        document.body.classList.remove("oscuro");
    }
}

function restablecerInterfaz() {

    // Eliminamos las cookies
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "tema=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Eliminamos el color de fondo en línea
    document.body.style.backgroundColor = "";

    // Eliminamos las clases de los temas
    document.body.classList.remove("claro");
    document.body.classList.remove("oscuro");

    // Limpiamos los campos del formulario
    nombre.value = "";
    color.value = "#000000";
    tema.value = "claro";

    // Eliminamos el contenido de bienvenida
    const contenedor = document.getElementById("contenedor-bienvenida");
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}
// Agregamos un evento al botón de restablecer
restablecer.addEventListener("click", () => {

    restablecerInterfaz();

});