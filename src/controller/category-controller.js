const { injectable } = require("tsyringe");
const { Get, Post } = require("../@project_modules/decorators/HTTP");

@injectable()
export default class CategoryController {
  constructor() {}

  @Get("/category")
  getProduct(req, res) {
    res.send("GET request to /products");
  }

  @Post("/category")
  addProduct(req, res) {
    res.send("POST request to /products");
  }
}
