import React from "react";
import { Container } from "@mui/material";
import { Routes, Navigate , Route } from "react-router-dom";
import NotFound  from "../../pages/notFound/NotFound";
import Product from "../../pages/product/Product";
import { paths } from "../../core/constants";

const LoggedInRouting = () => {
  return (
    <div>
      <Routes>
        <Route path={paths.DASHBOARD} element={<div>Hola</div>} />
        <Route path="/logout" element={<Container>Adios</Container>} />
        <Route path="/not-found" Component={NotFound} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </div>
  );
};
export default LoggedInRouting;