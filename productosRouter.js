const express = require("express");
const router = express.Router();

let productos = [
  {
    id: 1,
    titulo: "libro matematicas",
    precio: 2110,
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    id: 2,
    titulo: "libro algebra",
    precio: 2320,
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    id: 3,
    titulo: "libro historia",
    precio: 2020,
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
];

router.get("/productos", (req, res) => {
  try {
    return res.send(`<div>${mapeoProducts(productos)}</div>`);
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

router.get("/productos/:id", (req, res) => {
  try {
    const id = req.params.id;
    const prodId = productos.filter((producto) => id == producto.id);

    return res.send(`<div>${mapeoProducts(prodId)}</div>`);
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

router.post("/Addproductos", (req, res) => {
  try {
    const prodPOST = req.body;

    prodPOST.id = productos.length;
    productos.push(prodPOST);
    return res.json({
      message: "producto agregado correctamente con id: " + prodPOST.id,
    });
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});
router.put("/productos/:id", (req, res) => {
  try {
    const id = req.params.id;
    const prodId = find((producto) => producto.id == id);
    const prodSelect = productos.splice(prodId - 1, 1, req.body);
    return res.json({ prodSelect });
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});
router.delete("/productos/:id", (req, res) => {
  try {
    const id = req.params.id;
    const productosNew = filter((producto) => producto.id != id);
    return res.json({ productosNew });
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

// funciones auxiliares

function mapeoProducts(ArrayProductos) {
  let productosNew = ArrayProductos.map(
    (prop) =>
      `<p>Producto: ${prop.titulo} Precio: ${prop.precio} Imagen: ${prop.url}</p>`
  );

  return productosNew;
}

module.exports = router;
