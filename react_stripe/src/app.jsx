import Pay from "./Pay";
import Success from "./Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/payment" element={<Pay />} />
      </Routes>
      <Routes>
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default app;
