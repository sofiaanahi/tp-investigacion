// Obtener Datos de una API
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    const firstThreePosts = data.slice(0, 3);
    console.log("LOS TRES ELEMENTOS", firstThreePosts);
    displayData(firstThreePosts);
})
.catch(error => console.error('ERROR AL OBTENER LOS DATOS:', error));


// Enviar Datos al Servidor
const postObject = {
title: "NUEVO TITULO",
body: "CONTENIDO DEL NUEVO POST"
};

fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(postObject)
})
.then(response => response.json())
.then(data => {
console.log("RESPUESTA DEL SERVIDOR", data);
})
.catch(error => console.error('ERROR AL ENVIAR LOS DATOS', error));

// Descargar una Imagen y Mostrar en <img>
const imgElement = document.createElement("img");
imgElement.src = "https://via.placeholder.com/150";
imgElement.onload = () => {
console.log("Imagen descargada y mostrada.");
document.getElementById("imagen-contenedor").appendChild(imgElement);
};
imgElement.onerror = () => {
console.error("ERROR DE CARGA DE LA IMAGEN");
};

// Función para mostrar los datos en el HTML
function displayData(data) {
const dataContainer = document.getElementById("data");
dataContainer.innerHTML = "<h6>DATOS OBTENIDOS</h6>";

data.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}<br><br>`;
    dataContainer.appendChild(postDiv);
});
}