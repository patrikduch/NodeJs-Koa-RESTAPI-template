import { Context } from "koa";

/**
 * @function responseHandler => Middleware for handling promises.
 * @param ctx  => Koa context that encapsulates request and response data.
 * @param next  => Function for passing the request into another middleware
 */
async function responseHandler(ctx: Context, next: any) {
  try {
    await next();
  } catch (err) {
    ctx.throw(err.code, err.message);
  }

  // Ignore post-processing if body was already set
  if (!ctx.state.response || ctx.body) return;

  ctx.status = 200;
  ctx.body = {
    ...ctx.state.response,
    ok: true,
  };
}

export { responseHandler };
