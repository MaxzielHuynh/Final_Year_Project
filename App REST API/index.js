const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const clientRouter = require("./Routes/ClientRouter");
const confirmation = require("./Routes/cfmRouter");
const wareRouter = require("./Routes/WareRouter");
const bookingRouter = require("./Routes/BookingRouter");
const bagRouter = require("./Routes/BagRouter");
const stripeRouter = require("./Routes/StripeRouter");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB Successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/cfm", confirmation);
app.use("/api/clients", clientRouter);
app.use("/api/wares", wareRouter);
app.use("/api/bags", bagRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/checkout", stripeRouter);

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
