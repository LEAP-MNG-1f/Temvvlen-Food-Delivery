import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());

app.use("/", (request, response) => {
  response.send(["Hello", "World"]);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
