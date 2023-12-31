import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login/Login";

const LoggedOutRouting = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
};

export default LoggedOutRouting;
