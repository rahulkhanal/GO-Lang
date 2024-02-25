const { injectable } = require("tsyringe");
const { Get, Post } = require("../@rahul_modules/decorators/HTTP");

@injectable()
export default class ProductController {
  constructor() {}

  @Get("/products")
  getProduct(req, res) {
    res.send("GET request to /products");
  }

  @Post("/products")
  addProduct(req, res) {
    res.send("POST request to /products");
  }
}
