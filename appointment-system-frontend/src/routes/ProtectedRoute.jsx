import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  return isAuthenticated ? children : navigate("/login");
}

export default ProtectedRoute;
