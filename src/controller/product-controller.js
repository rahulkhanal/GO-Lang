const { injectable } = require("tsyringe");
const { Get, Post } = require("../@project_modules/decorators");

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
