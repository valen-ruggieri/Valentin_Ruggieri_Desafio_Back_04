const express = require("express");
const router = express.Router();
const styles = require('../Desafio 4/styles')


let productos = [
  {
    id: 1,
    titulo: "Remera",
    emoji:"👕",
    precio: 1500,
    url: "https://producto.com/data/.png"
  },
  {
    id: 2,
    titulo: "Pantalon",
    emoji:"👖",
    precio: 3000,
    url: "https://producto.com/data/.png"
  },
  {
    id: 3,
    titulo: "Campera",
    emoji:"🧥",
    precio: 5000,
    url: "https://producto.com/data/.png"
  },
];

router.get("/productos", (req, res) => {
  try {
    
    return res.send(`<section style="${styles.Section}">
    <h1 style="${styles.H1}">LISTA DE PRODUCTOS</h1>
    ${mapeoProducts(productos)}
    </section>`);
    
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

router.get("/productos/:id", (req, res) => {
  try {
    const id = req.params.id;
    const prodId = productos.filter((producto) => id == producto.id);

    return res.send(`<section style="${styles.Section}">
    <h1 style="${styles.H1}">LISTA DE PRODUCTOS</h1>
    ${mapeoProducts(prodId)}
    </section>`);
    
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

router.post("/addproductos", (req, res) => {
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
    const prodId = productos.find((producto) => producto.id == id);
    const prodSelect = productos.splice(prodId - 1, 1, req.body);
    return res.json({ prodSelect });
  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

router.delete("/productos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const productosNew = productos.filter((producto) => producto.id !== id);
    return res.json({productosNew});

  } catch (err) {
    return res.json({ error: "producto no encontrado" });
  }
});

// funciones auxiliares

function mapeoProducts(ArrayProductos) {
  let productosNew = ArrayProductos.map(
    (prop) =>
      `
      <div style="${styles.Div}">
      <p style="${styles.P}">${prop.emoji}</p>
      <p style="${styles.P}">ID: ${prop.id}</p>
  <p style="${styles.P}">Producto: ${prop.titulo}</p>
  <p style="${styles.P}">Precio: ${prop.precio}</p>
  <p style="${styles.P}">Imagen: ${prop.url}</p>
  
  </div>`
  );

  return productosNew;
}



module.exports = router;
