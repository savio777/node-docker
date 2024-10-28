import express, { Response } from "express";

import mongoose from "mongoose";

// <name_servie>:27017
mongoose
  .connect(
    `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/my_database/?authSource=admin`
  )
  .then(() => console.log("mongo connected :)"))
  .catch((e) => console.log("error mongo", e));

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_: any, res: Response) => {
  res.json({
    hello: `hello ${port} ${process.env.NODE_ENV} :)`,
  });
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/ :)`);
});
