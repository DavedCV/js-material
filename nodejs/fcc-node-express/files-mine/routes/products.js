const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(
    products.map((prod) => {
      const { id, name, image } = prod;
      return { id, name, image };
    })
  );
});

router.get("/:id", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id == Number(req.params.id)
  );

  if (!singleProduct) return res.status(404).send("product does not exist");

  res.json(singleProduct);
});

router.get("/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length < 1) {
    res.status(200).json({ sucess: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

module.exports = router;
