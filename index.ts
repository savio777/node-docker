import express, { Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_, res: Response) => {
  res.json({ hello: "hello :):)" });
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/ :)`);
});
