import { container } from "tsyringe";
import { router } from "./decorators/HTTP/route-docorator.internal";
import ProductController from "../controller/product-controller";
import CategoryController from "../controller/category-controller";

export class RAHUL {
  constructor(Express) {
    this.app = Express;
  }
  App() {
    return this.app;
  }
  
  BOOTSTRAP() {
    router.getRouter().use("/", new ProductController().getProduct);
    const controllers = [ProductController, CategoryController];
    controllers.forEach((controller) => {
      container.register(controller.name, { useClass: controller });
    });
    const productController = container.resolve(ProductController);
  }
}
