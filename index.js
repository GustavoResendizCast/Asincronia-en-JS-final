// Obtenemos el botón desde el DOM utilizando su id
const boton = document.getElementById('boton');

// Añadimos un listener para escuchar el evento "click" en el botón
// Cuando el botón es presionado, la función "cargarImagen" se ejecutará
boton.addEventListener('click', cargarImagen);

async function cargarImagen() {
  try {
    // Enviamos una petición HTTP GET a la API de "cataas.com" para obtener datos de un gato
    const respuesta = await fetch('https://cataas.com/cat');

    // Obtenemos la imagen como un objeto Blob
    const imagenBlob = await respuesta.blob();

    // Creamos una URL de objeto para la imagen
    const imagenURL = URL.createObjectURL(imagenBlob);

    // Creamos un nuevo elemento "img" en el DOM y le asignamos la URL de la imagen obtenida
    const imagen = document.createElement('img');
    imagen.src = imagenURL;

    // Obtenemos el contenedor de imágenes desde el DOM utilizando su id
    const contenedor = document.getElementById('imagen');

    // Limpiamos el contenido del contenedor antes de agregar la nueva imagen
    contenedor.innerHTML = '';

    // Agregamos la imagen al contenedor
    contenedor.appendChild(imagen);

    // Imprimimos en la consola un mensaje indicando que la respuesta fue exitosa
    console.log('Respuesta exitosa');
  } catch (error) {
    // Si ocurre algún error durante la petición, lo imprimimos en la consola
    console.error(`Se produjo un error: ${error}`);
  }
}



