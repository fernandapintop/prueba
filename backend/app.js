// app.js
const express = require("express");
const app = express();
const cors = require("cors");
const maximunValueOfSubString = require("./utils/maximunValueOfSubString");

const problem1router = require("./routes/problem1-Route");
const problem2router = require("./routes/problem2-Route");

app.use(cors());
app.use(express.json());

app.use("/problem-1", problem1router);
app.use("/problem-2", problem2router);

const t1 = "acdacdabcdc";

console.log(maximunValueOfSubString(t1));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
