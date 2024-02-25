import "reflect-metadata";
import Express from "express";
import { container } from 'tsyringe';
import ProductController from "./controller/product-controller";
import RouterSetup from "./@project_modules/routes/router-setup"
import { router } from "./@project_modules/decorators/route-docorator";

const app = Express()

container.register('ProductController', { useClass: ProductController });
const productController = container.resolve(ProductController);

router.getRouter().use('/', productController.getProduct);

app.use(router.getRouter());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
