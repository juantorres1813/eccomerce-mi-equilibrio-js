document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del producto de los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const productoID = params.get('id');
    let productos = []
    // Cargar los detalles del producto desde el archivo JSON
    fetch('./js/productos.json')
        .then(response => response.json())
        .then(data => {
            productos = data
            // Encontrar el producto con el ID correspondiente
            const producto = data.find(p => p.id == productoID);

            // Mostrar la información del producto en la página
            if (producto) {
                const detalleProducto = document.getElementById('detalle-producto');
                // Construir el HTML del producto
                let html = `
                    <div class="container">
                        <div class="wrappershop">
                            <div class="product-box">
                                <div class="small-imgs">
                `;
                
                // Verificar si existe producto.imagen2 antes de incluirlo en el HTML
                if (producto.imagen2) {
                    html += `
                                    <img class="producto-imagen producto-imagen-con-imagen2" src="${producto.imagen}" alt="${producto.titulo}" onclick="clk(this)">
                                    <img class="producto-imagen producto-imagen-con-imagen2" src="${producto.imagen2}" alt="${producto.titulo}" onclick="clk(this)">
                    `;
                } else {
                    html += `
                                    <img class="producto-imagen producto-imagen-sin-imagen2" src="${producto.imagen}" alt="${producto.titulo}" onclick="clk(this)">
                    `;
                }
                
                // Continuar construyendo el HTML del producto
                html += `
                                </div>
                                <div class="main-images">
                                    <img id="imgs" class="producto-imagen2" src="${producto.imagen}" alt="${producto.titulo}">
                                    <h3>${producto.titulo}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                // Insertar el HTML en el elemento detalleProducto
                detalleProducto.innerHTML = html;
                
                // Añadir clase condicional a div.small-imgs
                const smallImgsDiv = document.querySelector('.small-imgs');
                if (!producto.imagen2) {
                    smallImgsDiv.classList.add('solo-imagen1');
                }

                if (producto.video) {
                    const videoContainer = document.createElement('div');
                    videoContainer.classList.add('video-container');
                    videoContainer.innerHTML = `
                        <iframe width="90%" height="700px" controls="" src="${producto.video}" frameborder="0" allowfullscreen></iframe>
                    `;
                    detalleProducto.appendChild(videoContainer);
                }
            } else {
            }
        })
        .catch(error => {
            console.error('Error al cargar los detalles del producto', error);
        });
});

function clk(newImg){
    let getImg = document.getElementById("imgs")
    getImg.src = newImg.src
}