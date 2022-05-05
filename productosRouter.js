const express = require("express");
const { route } = require("express/lib/application");
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
    res.send(productos);
  } 
  catch (err) {
    res.json({ error: "producto no encontrado" });
  }
});

router.get("/productos/:id", (req, res) => {
  try {
    const id = parseInt(req.params);
    const prodId = productos.filter((producto) => producto.id === id);
    res.send(prodId);
  } 
  catch (err) {
    res.json({ error: "producto no encontrado" });
  }
});

route.post("/productos", (req, res) => {
  try {
    const prodPOST = parseInt(req.body);
    productos.push(prodPOST);
    res.json({
      message: "producto agregado correctamente con id: " + prodPOST.id,
    });
  } 
  catch (err) {
    res.json({ error: "producto no encontrado" });
  }
});
router.put("/productos/:id", (req, res) => {
  try {
    const id = parseInt(req.params);
    const prodId = find((producto) => producto.id == id);
    const prodSelect = productos.splice(prodId - 1, 1, req.body);
    res.json({ prodSelect });
  } 
  catch (err) {
    res.json({ error: "producto no encontrado" });
  }
});
router.delete("/productos/:id", (req, res) => {
  try {
    const id = parseInt(req.params);
    const productosNew = filter((producto) => producto.id != id);
    res.json({ productosNew });
  } 
  catch (err) {
    res.json({ error: "producto no encontrado" });
  }
});

module.exports = router;
