const express = require("express");
const cors = require("cors");
const path = require("path");
const index = require("./server/routes/index");
const db = require("./DB/dbConnect");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", index);

db.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected");
  app.listen(port, () => {
    console.log(`express is running on ${port}`);
  });
});