import express, { response } from "express";

const app = express();

let port = 4000;

app.listen(port, () => {
  console.log(`running server on port ${port}`);
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wooden Table",
      description: "A sturdy wooden table perfect for dining rooms.",
      price: 149.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 50,
    },
    {
      id: 2,
      name: "Wooden Chair",
      description: "A comfortable wooden chair suitable for any room.",
      price: 79.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 200,
    },
    {
      id: 3,
      name: "Wooden Bookshelf",
      description: "A spacious wooden bookshelf to organize your books.",
      price: 129.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 150,
    },
    {
      id: 4,
      name: "Wooden Bed Frame",
      description: "A durable wooden bed frame for a good night's sleep.",
      price: 199.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 75,
    },
    {
      id: 5,
      name: "Wooden Coffee Table",
      description: "A stylish wooden coffee table for your living room.",
      price: 99.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 50,
    },
    {
      id: 6,
      name: "Wooden Desk",
      description: "A functional wooden desk ideal for home offices.",
      price: 179.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 120,
    },
    {
      id: 7,
      name: "Wooden Dining Set",
      description: "A complete wooden dining set for family meals.",
      price: 499.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 90,
    },
    {
      id: 8,
      name: "Wooden Nightstand",
      description: "A wooden nightstand with a drawer for storage.",
      price: 59.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 60,
    },
    {
      id: 9,
      name: "Wooden Wardrobe",
      description: "A spacious wooden wardrobe to store your clothes.",
      price: 249.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 30,
    },
    {
      id: 10,
      name: "Wooden TV Stand",
      description: "A wooden TV stand with shelves for media devices.",
      price: 129.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 10,
    },
    {
      id: 11,
      name: "Wooden Bench",
      description: "A versatile wooden bench for indoor and outdoor use.",
      price: 89.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 110,
    },
    {
      id: 12,
      name: "Wooden Cabinet",
      description: "A wooden cabinet with ample storage space.",
      price: 199.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 85,
    },
    {
      id: 13,
      name: "Wooden Shoe Rack",
      description: "A wooden shoe rack to organize your footwear.",
      price: 49.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 65,
    },
    {
      id: 14,
      name: "Wooden Coat Rack",
      description: "A stylish wooden coat rack for your entryway.",
      price: 69.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 40,
    },
    {
      id: 15,
      name: "Wooden Drawer",
      description: "A wooden drawer set for additional storage.",
      price: 99.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 20,
    },
    {
      id: 16,
      name: "Wooden Sofa",
      description: "A comfortable wooden sofa with cushions.",
      price: 299.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 130,
    },
    {
      id: 17,
      name: "Wooden Bar Stool",
      description: "A wooden bar stool for your kitchen or bar.",
      price: 49.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 95,
    },
    {
      id: 18,
      name: "Wooden Crib",
      description: "A safe and sturdy wooden crib for your baby.",
      price: 159.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 75,
    },
    {
      id: 19,
      name: "Wooden Dresser",
      description: "A wooden dresser with multiple drawers.",
      price: 229.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 55,
    },
    {
      id: 20,
      name: "Wooden Mirror Frame",
      description: "A decorative wooden frame for your mirror.",
      price: 39.99,
      category: "Furniture",
      image: "https://via.placeholder.com/150",
      stock: 35,
    },
  ];

  if (req.query.search) {
    const filterproduct = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(req.query.search)
    );
    res.send(filterproduct);
    return;
  }

  setTimeout(() => {
    res.json(products);
  }, 3000);
});
