import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("currentUser:", currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
