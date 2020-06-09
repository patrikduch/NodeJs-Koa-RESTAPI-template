import Koa from "koa";
import Middleware from "./util/server/koa/Middleware";

const app = new Koa();

// Middleware configuration setup (Cors processing, routes setup, custom handlers for promises etc. )
Middleware.setup(app);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
