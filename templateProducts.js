const templateProducts = (category, products) => {
  const template = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Productos de ${category}</title>
        </head>        
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/electronica">Electrónica</a>
                <a href="/ropa">Ropa</a>
                <a href="/hogar">Hogar</a>
                <a href="/productos">Productos</a>
            </nav>
            <h1>Productos de ${category}</h1>
            <p> Total de productos de ${category}: ${products.length}</p>
            <ul>
            ${products
              .map(
                (product) =>
                  `<li><h3>Nombre: ${product.name}</h3><p>Precio: ${product.price}</p><p>Stock: ${product.stock}</p></li>`
              )
              .join("")}
                
            </ul>
        </body>
    </html>
`;
  return template;
};
module.exports = templateProducts;
