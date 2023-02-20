if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const router = require("./routes/index");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log("app berjalan");
});
