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
                detalleProducto.innerHTML = `
                    <div "class="container">
                        <div class="wrappershop">
                            <div class="product-box">
                                <div class="small-imgs">
                                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" onclick="clk(this)">
                                    <img class="producto-imagen" src="${producto.imagen2}" alt="${producto.titulo}" onclick="clk(this)">
                                </div>
                                <div class="main-images">
                                    <img id="imgs" class="producto-imagen2" src="${producto.imagen}" alt="${producto.titulo}">
                                    <h3>${producto.titulo}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
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