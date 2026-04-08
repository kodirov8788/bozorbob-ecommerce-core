/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";
import auth from "../../../middleware/auth";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
  }
};

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };

    const excludeFields = ["page", "sort", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);

    if (queryObj.category !== "all")
      this.query.find({ category: queryObj.category });
    if (queryObj.title !== "all")
      this.query.find({ title: { $regex: queryObj.title } });

    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join("");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  // paginating(){
  //     const page = this.queryString.page * 1 || 1
  //     const limit = this.queryString.limit * 1 || 20
  //     const skip = (page - 1) * limit;
  //     this.query = this.query.skip(skip).limit(limit)
  //     return this;
  // }
}

const getProducts = async (req, res) => {
  try {
    if (process.env.DEMO_MODE === "true") {
      const mockProducts = [
        {
          _id: "614b14d28d6f5a0016a9a3b1",
          title: "NextGen Smart Watch",
          price: 199,
          description: "Elevate your daily routine with health tracking and seamless connectivity.",
          category: "electronics",
          images: [{ url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" }],
          inStock: 15,
          sold: 120,
        },
        {
          _id: "614b14d28d6f5a0016a9a3b2",
          title: "Premium Wireless Audio",
          price: 249,
          description: "Studio-quality sound delivered in a sleek, minimalist package.",
          category: "electronics",
          images: [{ url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" }],
          inStock: 8,
          sold: 45,
        },
        {
          _id: "614b14d28d6f5a0016a9a3b3",
          title: "Nomad Canvas Backpack",
          price: 120,
          description: "Durable design meets urban aesthetics for the modern explorer.",
          category: "fashion",
          images: [{ url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800" }],
          inStock: 25,
          sold: 67,
        },
        {
          _id: "614b14d28d6f5a0016a9a3b4",
          title: "Artisan Ceramic Lamp",
          price: 155,
          description: "Handcrafted warmth for your contemporary living space.",
          category: "interior",
          images: [{ url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" }],
          inStock: 5,
          sold: 12,
        },
        {
          _id: "614b14d28d6f5a0016a9a3b5",
          title: "Mechanical Desk Clock",
          price: 75,
          description: "Precision engineering meets vintage-inspired desktop design.",
          category: "interior",
          images: [{ url: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800" }],
          inStock: 12,
          sold: 89,
        },
        {
          _id: "614b14d28d6f5a0016a9a3b6",
          title: "Pure Linen Bedding Set",
          price: 210,
          description: "Breathable luxury for the ultimate resting experience.",
          category: "home",
          images: [{ url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" }],
          inStock: 10,
          sold: 34,
        },
        {
            _id: "614b14d28d6f5a0016a9a3b7",
            title: "Executive Fountain Pen",
            price: 45,
            description: "Timeless elegance for your signature moments.",
            category: "office",
            images: [{ url: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800" }],
            inStock: 30,
            sold: 156,
          },
          {
            _id: "614b14d28d6f5a0016a9a3b8",
            title: "Minimalist Coffee Brewer",
            price: 135,
            description: "Extract the perfect flavor with our award-winning pour-over system.",
            category: "lifestyle",
            images: [{ url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" }],
            inStock: 18,
            sold: 210,
          }
      ];

      return res.json({
        status: "success",
        result: mockProducts.length,
        products: mockProducts,
      });
    }

    const features = new APIfeatures(Products.find(), req.query)
      .filtering()
      .sorting();
    //   .paginating();

    const products = await features.query;

    res.json({
      status: "success",
      result: products.length,
      products,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== "admin")
      return res.status(400).json({ err: "Authentication is not valid." });

    const {
      video,
      videoModule,
      book,
      sale,
      title,
      price,
      description,
      content,
      category,
      images,
      book_view,
    } = req.body;
    if (
      !title ||
      !price ||
      !description ||
      !content ||
      category === "all" ||
      images.length === 0
    )
      return res.status(400).json({ err: "Please add all the fields." });

    const newProduct = new Products({
      title: title.toLowerCase(),
      price,
      description,
      content,
      category,
      images,
      video,
      videoModule,
      book,
      sale,
      book_view,
    });

    await newProduct.save();

    res.json({ msg: "Success! Created a new product" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
