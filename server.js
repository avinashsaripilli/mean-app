const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.js");

const app = express();
const port = process.env.PORT || 8080;
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("database connected");
});

router.route("/add").post((req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(user => {
      console.log(req.body);
      res.status(200).json({ user: "User addedd successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to add");
      console.log(err);
    });
});

router.route("/display/:phone").get((req, res) => {
  User.find()
    .where("phone")
    .equals(req.params.phone)
    .exec((err, user) => {
      if (err) console.log(err);
      else res.status(200).json(user);
    });
});

app.use("/", router);

app.listen(port, () => console.log("Started"));
