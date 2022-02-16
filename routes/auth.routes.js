const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const saltRounds = 10;

const User = require("../models/User.model");

const router = require("express").Router();

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

bcrypt
  .genSalt(saltRounds)
  .then((salt) => bcrypt.hash(password, salt))
  .then((hashedPassword) => {
    return User.create({ username, password: hashedPassword });
  })
  .then(() => {
    res.redirect("/");
  })
  .catch((err) => {
      next(err);
  });

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  /* User.create({ username, password })
    .then((user) => {
      console.log("User created", user.username);
      res.redirect("/");
    })
    .catch((err) => {
      next(err);
      res.redirect("/signup");
    }); */
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

module.exports = router;
