import "reflect-metadata";
import Express from "express";
import { router } from "./@rahul_modules/decorators/HTTP/route-docorator.internal";
import { RAHUL } from "./@rahul_modules/bootstrap";

const app = Express();

app.use(router.getRouter());
const start = new RAHUL(Express);
start.BOOTSTRAP();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 