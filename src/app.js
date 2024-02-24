import Express from "express";
import a from "./hello";
// import { Get } from "./project_modules/decorators/route-docorator";
const app = Express();

console.log(a);
app.listen(3000, (err, resp) => {
  if (err) {
    throw err;
  } else {
    console.log("Server started")
  }
});
