const {
  validateToken,
  validateAndAuthorizationToken,
  validateAdminToken,
} = require("./ValidateTokenRouter");
const router = require("express").Router();
const Booking = require("../Models/BookingModel");

//create

router.post("/", validateToken, async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", validateAdminToken, async (req, res) => {
  try {
    const updateBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBooking);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", validateAdminToken, async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Your Booking has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/find/:userID", validateAndAuthorizationToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ userID: req.params.userID });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //get all
router.get("/", validateAdminToken, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get cash 1 months

router.get("/income", validateAdminToken, async (req, res) => {
  const productID = res.query.productID;
  const date = new Date();
  const previousMonth = new Date(date.setMonth(date.getMonth() - 1));
  const anotherMonths = new Date(
    new Date().setMonth(previousMonth.getMonth() - 1)
  );
  try {
    const income = await Booking.aggregate([
      {
        $match: {
          createdAt: {
            $gte: anotherMonths,
            ...(productID && {
              wares: {
                $elemMatch: {
                  productID,
                },
              },
            }),
          },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          cost: "$cost",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$cost" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
