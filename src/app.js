import "reflect-metadata";
import Express from "express";
import { Get } from "./project_modules/decorators/route-docorator";
const app = Express();

// console.log(Get);
app.listen(3000, (err, resp) => {
  if (err) {
    throw err;
  } else {
    console.log("Server started")
  }
});
