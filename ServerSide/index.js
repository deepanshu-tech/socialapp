const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const crypto = require("crypto");
const dotenv = require("dotenv");
const UserSchema = require("./models/user");
const User = mongoose.model("user", UserSchema);
const generator = require("generate-password");
var nodemailer = require("nodemailer");
// dotenv.config();
dotenv.config({ path: "./config.env" });
const db = process.env.database;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));
app.get("/", (req, res) => {
  res.send("<h1>Welcome to SocialApp</h1>");
});
app.post("/", async (req, res) => {
  try {
    let user = req.body;
    if (user["_id"] !== undefined) {
      res.status(200).json("Account Already Exists");
    } else {
      const userObj = new User(user);
      userObj.setPassword(user.password);

      const result = await userObj.save();
      result["salt"] = "";
      result["hash"] = "";

      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/forgotpassword", async (req, res) => {
  try {
    let email = req.body.email;
    console.log(email);
    let result = await User.findOne({ email: email });
    // console.log(result);
    if (result) {
      let newpassword = generator.generate({
        length: 10,
        numbers: true,
      });

      let salt = crypto.randomBytes(16).toString("hex");
      let hash = crypto
        .pbkdf2Sync(newpassword, salt, 1000, 1000, "sha512")
        .toString("hex");

      let updatedpwd = await User.updateOne(
        { email: email },
        { $set: { hash: hash, salt: salt } }
      );

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.PASSWORD,
        },
      });

      var mailOptions = {
        from: process.env.EMAIL_ID,
        to: email,
        subject: "PASSWORD RESET",
        text:
          "This is your new password: " +
          newpassword +
          ". Try logging in with new credentials.",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.status(500).json("Error Recovering Password!");
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.status(200).json("password reset done!");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(3000, (e) => {
  console.log("listening on the port");

  mongoose.connect("mongodb://localhost/socialapp")
    .then((result) => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log("Database Connection Failed");
      console.log(e);
    });
});
