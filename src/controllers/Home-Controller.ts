import router from "../router";
import { Context } from "koa";

router.get("/", async (ctx: Context) => {
  ctx.state.response = {
    content: "Patrik Duch",
  };
});

export default router;
