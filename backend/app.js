// app.js
const express = require("express");
const app = express();
const cors = require("cors");

const problem1router = require("./routes/problem1-Route");

app.use(cors());
app.use(express.json());

app.use("/problem-1", problem1router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
