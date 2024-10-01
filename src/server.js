import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter.js";
import { localMiddleware } from "./middlewares.js";
import videoRouter from "./routers/videoRouter.js";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
