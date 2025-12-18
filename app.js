const express = require("express");
const app = express();
const template = require("./templateHome.js");
const productsData = require("./data.js");
const templateProducts = require("./templateProducts.js");
const templateAllProducts = require("./templateAllProducts.js");

app.listen(3000, () => {
  console.log(`Mi servidor está escuchando en http://localhost:3000`);
});

app.get("/", (req, res) => {
  res.send(template);
});

const filterCategories = (category) =>
  productsData.filter((product) => product.category === category);

app.get("/electronica", (req, res) => {
  const category = "electrónica";
  const products = filterCategories(category);
  res.send(templateProducts(category, products));
});

app.get("/ropa", (req, res) => {
  const category = "ropa";
  const products = filterCategories(category);
  res.send(templateProducts(category, products));
});

app.get("/hogar", (req, res) => {
  const category = "hogar";
  const products = filterCategories(category);
  res.send(templateProducts(category, products));
});

app.get("/productos", (req, res) => {
  res.send(templateAllProducts(productsData));
});

const filtrarPrecio = (precio) => {
  const productosBaratos = productsData.filter(
    (product) => product.price <= precio
  );

  const productosCaros = productsData.filter(
    (product) => product.price > precio
  );

  return {
    baratos: productosBaratos,
    caros: productosCaros,
  };
};

const resultado = filtrarPrecio(100);

app.get("/productos/baratos", (req, res) => {
  res.send(templateAllProducts(resultado.baratos));
});

app.get("/productos/caros", (req, res) => {
  res.send(templateAllProducts(resultado.caros));
});

app.get("/");
app.use((req, res) => {
  res.status(404).send("Error 404 - Page not found");
});
