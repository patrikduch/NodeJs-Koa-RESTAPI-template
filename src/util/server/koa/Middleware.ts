import compress from "koa-compress";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import staticServe from "koa-static";
import Koa from "koa";
import { responseHandler } from "../../../util/server/koa/handlers/promise/responseHandler";

import HomeController from "../../../controllers/Home-Controller";

const setup = (app: Koa<any, {}>) => {
  app.use(
    compress({
      threshold: 2048,
      flush: require("zlib").Z_SYNC_FLUSH,
    })
  );

  app
    .use(cors()) // Cross site request forgery
    .use(bodyParser()) // Processing post request (etc.)
    .use(responseHandler) // Response handler for handling promises

    .use(staticServe(".")) // Servubg static files

    // Home controller REST API
    .use(HomeController.routes())
    .use(HomeController.allowedMethods());
};

export default {
  setup,
};
