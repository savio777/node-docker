import express, { Response } from "express";
import mongoose from "mongoose";

import variables from "@/config/variables";

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

app.listen(port, () => {
  console.log(`api is running on http://localhost:${port}/ :)`);
});
