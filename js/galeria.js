document.addEventListener("DOMContentLoaded", () => {
    const galeria = document.getElementById("galeria");

    fetch("./js/imagenes.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(categoria => {
                const titulo = document.createElement("h2");
                titulo.textContent = categoria.categoria;
                titulo.classList.add("titulo-categoria");
                galeria.appendChild(titulo);

                const contenedor = document.createElement("div");
                contenedor.classList.add("galeria-categoria");

                categoria.imagenes.forEach(img => {
                    const div = document.createElement("div");
                    div.classList.add("imagen-galeria");
                    div.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
                    contenedor.appendChild(div);
                });

                galeria.appendChild(contenedor);
            });
        })
        .catch(err => console.error("Error al cargar imágenes:", err));
});