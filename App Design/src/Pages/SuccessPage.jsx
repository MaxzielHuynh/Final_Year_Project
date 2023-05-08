import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clientReq } from "../ReqMethods";

const SuccessPage = () => {
  const { stripeData, bag } = useLocation().state;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    const createBooking = async () => {
      try {
        const res = await clientReq.post("/bookings", {
          userID: currentUser._id,
          wares: bag.wares.map(({ _id, _count }) => ({
            wareID: _id,
            count: _count,
          })),
          cost: bag.total,
          location: stripeData.billing_details.location,
        });
        setBookingId(res.data._id);
      } catch (error) {
        console.error(error);
      }
    };
    if (stripeData) {
      Promise.all([createBooking()]).catch((error) => console.error(error));
    }
  }, [bag.total, bag.wares, currentUser._id, stripeData]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {bookingId
        ? `Order has been created successfully. Your order number is ${bookingId}`
        : `Successful. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default SuccessPage;
