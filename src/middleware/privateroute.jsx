import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token"); 

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
