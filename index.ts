import express, { Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_: any, res: Response) => {
  res.json({
    hello: `hello ${port} :)with docker in ${process.env.NODE_ENV} mode :)`,
  });
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/ :)`);
});
