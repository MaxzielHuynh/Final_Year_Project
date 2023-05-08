const {
  validateToken,
  validateAndAuthorizationToken,
  validateAdminToken,
} = require("./ValidateTokenRouter");
const router = require("express").Router();
const Bag = require("../Models/BagModel");

//create

router.post("/", validateToken, async (req, res) => {
  const newBag = new Bag(req.body);
  try {
    const savedBag = await newBag.save();
    res.status(200).json(savedBag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", validateAndAuthorizationToken, async (req, res) => {
  try {
    const updateBag = await Bag.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", validateAndAuthorizationToken, async (req, res) => {
  try {
    await Bag.findByIdAndDelete(req.params.id);
    res.status(200).json("Your bag has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/find/:userID", validateAndAuthorizationToken, async (req, res) => {
  try {
    const bag = await Bag.findOne({ userID: req.params.userID });
    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //get all
router.get("/", validateAdminToken, async (req, res) => {
  try {
    const bags = await Bag.find();
    res.status(200).json(bags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
