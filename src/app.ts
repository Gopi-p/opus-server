import express from "express";
import router from "./routes/main";

const app = express();

app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Opus Server Running!");
});

export default app;
