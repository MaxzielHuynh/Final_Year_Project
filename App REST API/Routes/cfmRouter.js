//cfm=auth

const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const Client = require("../Models/ClientModel");

//register
router.post("/register", async (req, res) => {
  const newClient = new Client({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.pass
    ).toString(),
  });

  try {
    const savedClient = await newClient.save();
    res.status(200).json(savedClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

//sign in
router.post("/login", async (req, res) => {
  try {
    const client = await Client.findOne({
      username: req.body.username,
    });
    !client && res.status(401).json("Wrong credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      client.password,
      process.env.pass
    );
    const InitialPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    InitialPassword !== req.body.password &&
      res.status(401).json("Wrong Access Code");

    const entryToken = jwt.sign(
      {
        id: client._id,
        isAdmin: client.isAdmin,
      },
      process.env.jwt,
      { expiresIn: "7d" }
    );

    const { password, ...others } = client._doc;

    res.status(200).json({ ...others,entryToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
