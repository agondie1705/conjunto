
//Detectar el sistema operativo

const agente = navigator.userAgent.toLowerCase();

let sistema = "desconocido";

if (agente.includes("windows")) {
    sistema = "Windows";
} 
else if (agente.includes("mac")) {
    sistema = "Mac";
} 
else if (agente.includes("linux")) {
    sistema = "Linux";
}

// Mostrar bienvenida personalizada
document.getElementById("bienvenida").textContent =
    "¡Bienvenido! Estás utilizando " + sistema;

// Redirigir con historial

document.getElementById("conHistorial").addEventListener("click", function() {
    if (window.opener && !window.opener.closed) {
        window.opener.location.assign("https://www.google.es/");
    }
});


// Redirigir sin historial

document.getElementById("sinHistorial").addEventListener("click", function() {
    if (window.opener && !window.opener.closed) {
        window.opener.location.replace("https://www.google.es/");
    }
});


//Autodestrucción en cinco segundos

document.getElementById("autodestruccion").addEventListener("click", function() {
    let segundos = 5;
    const mensaje = document.getElementById("cuentaAtras");
    this.disabled = true;
    mensaje.textContent = "La ventana se cerrará en " + segundos + " segundos.";
    const intervalo = setInterval(function() {
        segundos--;
        if (segundos > 0) {
            mensaje.textContent =
                "La ventana se cerrará en " + segundos + " segundos.";
        }
    }, 1000);
    setTimeout(function() {
        clearInterval(intervalo);
        mensaje.textContent = "Cerrando ventana...";
        window.close();
    }, 5000);
});
