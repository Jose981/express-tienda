const templateAllProducts = (products) => {
  const template = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Todos los productos</title>
        </head>        
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/electronics">Electrónica</a>
                <a href="/ropa">Ropa</a>
                <a href="/hogar">Hogar</a>
                <a href="/productos">Productos</a>
            </nav>
            <h1>Todos los productos</h1>
            <a href="/productos/baratos"><button>Productos baratos</button></a>
            <a href="/productos/caros"><button>Productos caros</button></a>
            <p> Total de productos: ${products.length}</p>
            <ul>
            ${products
              .map(
                (product) =>
                  `<li><h3>Nombre: ${product.name}</h3> <p>Categoria: ${product.category}</p><p>Precio: ${product.price}</p><p>Stock: ${product.stock}</p></li>`
              )
              .join("")}
                
            </ul>
        </body>
    </html>
`;
  return template;
};
module.exports = templateAllProducts;
