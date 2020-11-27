const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ! connect to the mongodb database...
mongoose.connect(
  "mongodb://localhost/blog_tut",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connection to mongodb database was successful!");
  }
);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blog"))


// server configurations are here....
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);