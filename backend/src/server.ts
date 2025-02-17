import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from backend");
});

const port = 3002;
app.listen(port, () => {
  console.log("App is running...");
});
