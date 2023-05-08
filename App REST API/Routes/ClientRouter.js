const {
  validateAndAuthorizationToken,
  validateAdminToken,
} = require("./ValidateTokenRouter");
const router = require("express").Router();
const Client = require("../Models/ClientModel");

//update
router.put("/:id", validateAndAuthorizationToken, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.pass
    ).toString();
  }
  try {
    const updateClient = await Client.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", validateAndAuthorizationToken, async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(200).json("Client has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/find/:id", validateAdminToken, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    const { password, ...others } = client._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all client
router.get("/", validateAdminToken, async (req, res) => {
  const query = req.query.new;
  try {
    const clients = query
      ? await Client.find().limit(5).sort({ _id: -1 })
      : await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get client stats
router.get("/stats", validateAdminToken, async (req, res) => {
  const date = new Date();
  const yearBefore = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await Client.aggregate([
      { $match: { createdAt: { $gte: yearBefore } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          count: { $sum: 1 },
        },
      }
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
