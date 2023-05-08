const { validateAdminToken } = require("./ValidateTokenRouter");
const router = require("express").Router();
const Ware = require("../Models/WareModel");

//create

router.post("/", validateAdminToken, async (req, res) => {
  const newWare = new Ware(req.body);
  try {
    const savedWare = await newWare.save();
    res.status(200).json(savedWare);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", validateAdminToken, async (req, res) => {
  try {
    const updateWare = await Ware.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateWare);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", validateAdminToken, async (req, res) => {
  try {
    await Ware.findByIdAndDelete(req.params.id);
    res.status(200).json("Ware has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/find/:id", async (req, res) => {
  try {
    const ware = await Ware.findById(req.params.id);
    res.status(200).json(ware);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all
router.get("/", async (req, res) => {
  const qNewest = req.query.new;
  const qGroup = req.query.group;
  try {
    let wares;
    if (qNewest) {
      wares = await Ware.find().sort({ createdAt: -1 }).limit(1);
    } else if (qGroup) {
      wares = await Ware.find({
        groups: {
          $in: [qGroup],
        },
      });
    } else {
      wares = await Ware.find();
    }
    res.status(200).json(wares);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
