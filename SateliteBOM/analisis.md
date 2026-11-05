
# Actividad 3.2: El Satélite del BOM

**Módulo:** Desarrollo web en entorno cliente  
**Actividad:** El Satélite del BOM

---

## Hito 0. Análisis de objetos JavaScript

### 1. Diferencia entre window y los objetos nativos

`window` es el objeto global del navegador y el elemento principal del Browser Object Model (BOM). Permite interactuar con la ventana del navegador, abrir nuevas ventanas, controlar la navegación y consultar información del entorno.

Por otro lado, `Math` y `JSON` son objetos nativos de JavaScript. Proporcionan funcionalidades propias del lenguaje, como operaciones matemáticas y el tratamiento de datos en formato JSON.

### 2. ¿Por qué no es necesario escribir window.Math?

No es necesario escribir `window.Math` porque `Math` es un objeto nativo de JavaScript y está disponible directamente en el entorno de ejecución.

Por ejemplo:

```javascript
Math.floor(4.8);
```

Es suficiente para obtener la parte entera inferior de un número decimal.

### 3. Clasificación de métodos y propiedades

| Elemento | Clasificación | Explicación |
|---|---|---|
| `window.open()` | BOM | Abre una nueva ventana o pestaña del navegador. |
| `parseFloat()` | JavaScript nativo | Convierte el comienzo de un texto en un número decimal. |
| `Math.floor()` | JavaScript nativo | Redondea un número hacia abajo al entero más próximo. |
| `navigator.userAgent` | BOM | Proporciona información sobre el navegador y el entorno del usuario. |

---

## Hito 1. Ventana principal

Se ha creado una página principal con el botón «Lanzar Ventana Satélite».

Al pulsarlo, JavaScript realiza las siguientes operaciones:

1. Define el ancho y el alto de la ventana satélite: 400 × 300 píxeles.
2. Consulta `screen.availWidth` y `screen.availHeight` para conocer el espacio disponible en la pantalla.
3. Utiliza `window.screenX` y `window.screenY` para tener en cuenta la posición de la ventana principal.
4. Calcula la posición centrada mediante `Math.floor()`.
5. Utiliza `window.open()` para abrir `satelite.html` con las dimensiones y la posición calculadas.

La apertura se ejecuta al pulsar el botón para cumplir las restricciones de los navegadores sobre las ventanas emergentes.

---

## Hito 2. Ventana satélite

La página `satelite.html` obtiene información del sistema mediante:

```javascript
navigator.userAgent
```

Se convierte el texto a minúsculas y se comprueba si contiene las palabras `windows`, `mac` o `linux`.

Según el resultado, se muestra un mensaje de bienvenida personalizado.

### Redirección con historial

Se utiliza:

```javascript
window.opener.location.assign("https://www.google.com/");
```

El método `assign()` navega a la dirección indicada y conserva la página anterior en el historial de navegación.

### Redirección sin historial

Se utiliza:

```javascript
window.opener.location.replace("https://www.wikipedia.org/");
```

El método `replace()` sustituye la entrada actual del historial por la nueva dirección, por lo que no permite volver a la página sustituida mediante el botón Atrás.

La propiedad `window.opener` permite acceder a la ventana principal que abrió la ventana satélite.

---

## Hito 3. Autodestrucción

Se ha añadido un botón llamado «Autodestrucción en 5 segundos».

Al pulsarlo:

1. Se inicia una cuenta atrás de cinco segundos.
2. Se utiliza `setInterval()` para actualizar el mensaje cada segundo.
3. Se desactiva el botón para evitar iniciar varias cuentas atrás.
4. Se utiliza `setTimeout()` para ejecutar el cierre después de cinco segundos.
5. Se cancela el intervalo con `clearInterval()` y se intenta cerrar la ventana mediante `window.close()`.

El navegador puede limitar el cierre programático, pero normalmente permite cerrar una ventana que ha sido abierta mediante `window.open()`.

---

## Conclusión

Con esta actividad se han utilizado objetos nativos de JavaScript y objetos del BOM para interactuar con el navegador.

Se han practicado la apertura y comunicación entre ventanas, la consulta de información del sistema, la navegación mediante el historial y el uso de temporizadores.

También se ha organizado el proyecto en varios archivos HTML, CSS y JavaScript para facilitar su mantenimiento y comprensión.
