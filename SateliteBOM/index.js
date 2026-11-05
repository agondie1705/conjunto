const boton = document.getElementById("lanzar");
boton.addEventListener("click", function() {

    // Dimensiones de la ventana satélite
    const ancho = 400;
    const alto = 300;

    // Obtener dimensiones disponibles de la pantalla
    const anchoPantalla = screen.availWidth;
    const altoPantalla = screen.availHeight;

    // Obtener posición de la ventana principal
    const posicionX = window.screenX;
    const posicionY = window.screenY;

    // Calcular posición centrada
    const izquierda = posicionX + Math.floor((anchoPantalla - ancho) / 2);
    const arriba = posicionY + Math.floor((altoPantalla - alto) / 2);

    // Abrir ventana satélite
    const satelite = window.open(
        "./SateliteBOM/satelite.html",
        "VentanaSatelite",
        `width=${ancho},height=${alto},left=${izquierda},top=${arriba}`
    );
    if (satelite) {
        document.getElementById("mensaje").textContent =
            "Ventana satélite abierta correctamente.";
        satelite.focus();
    } else {
        document.getElementById("mensaje").textContent =
            "El navegador ha bloqueado la ventana emergente.";
    }

});