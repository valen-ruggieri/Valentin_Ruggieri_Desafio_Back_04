const express = require("express");
const router = express.Router();

let productos = [];

router.get("/productos", (req, res) => {
  try {
   return res.json(productos);
    console.logreturn(res.json(productos));
  } catch (err) {
   return res.json({ error: "producto no encontrado" });
  }
});

router.get("/productos/:id", (req, res) => {
  try {
    const id = req.params.id;
    const prodId = productos.filter((producto) => id == producto.id);
   return res.json(prodId);
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

module.exports = router;
