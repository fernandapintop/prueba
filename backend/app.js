// app.js
const express = require("express");
const app = express();
const cors = require("cors");

const problem1router = require("./routes/problem1-Route");
const problem2router = require("./routes/problem2-Route");

app.use(cors());
app.use(express.json());

app.use("/api", problem1router);
app.use("/api", problem2router);

app.options("/api/problem-2", cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
