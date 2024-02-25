import "reflect-metadata";
import Express from "express";
import { container } from "tsyringe";
import ProductController from "./controller/product-controller";
import { router } from "./@project_modules/decorators/HTTP/route-docorator.internal";
import CategoryController from "./controller/category-controller";

const app = Express();
const controllers = [ProductController, CategoryController];
controllers.forEach((controller) => {
  container.register(controller.name, { useClass: controller });
});
const productController = container.resolve(ProductController);

router.getRouter().use("/", productController.getProduct);

app.use(router.getRouter());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
