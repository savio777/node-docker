import express, { Response } from "express";
import mongoose from "mongoose";

import variables from "@/config/variables";
import postRouter from "@/routes/postRoutes";
import swaggerDocs from "@/config/swagger";

// <name_servie>:<port>
const connect_url = `mongodb://${variables.MONGO_USER}:${variables.MONGO_PASSWORD}@${variables.MONGO_IP}:${variables.MONGO_PORT}/my_database`;

mongoose
  .connect(connect_url, { authSource: "admin" })
  .then(() => console.log("mongo connected :)"))
  .catch((e) => console.log("error mongo", e));

const app = express();

const port = variables.PORT || 3000;

app.get("/", (_: any, res: Response) => {
  res.json({
    hello: `${port} ${variables.NODE_ENV} :)`,
  });
});

app.use(express.json());
app.use("/api/v1/posts", postRouter);

swaggerDocs(app);

app.listen(port, () => {
  console.log(`api is running on http://localhost:${port}/ :)`);
});
