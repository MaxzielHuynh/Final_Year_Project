import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import WarePage from "./Pages/WarePage";
import LoginPage from "./Pages/LoginPage";
import SuccessPage from "./Pages/SuccessPage";
import YourBagPage from "./Pages/YourBagPage";
import RegisterPage from "./Pages/RegisterPage";
import WaresListPage from "./Pages/WaresListPage";
import { useSelector } from "react-redux";

const App = () => {
  const client = useSelector((state) => state.client.currentClient);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={client ? <Navigate to="/" /> : <LoginPage />}
        ></Route>
        <Route
          path="/register"
          element={client ? <Navigate to="/" /> : <RegisterPage />}
        ></Route>
        <Route path="/ware/:id" element={<WarePage />} />
        <Route path="/bag" element={<YourBagPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/wares/:group" element={<WaresListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
