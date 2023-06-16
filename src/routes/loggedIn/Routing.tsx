import React from "react";
import { Container } from "@mui/material";
import { Routes, Navigate , Route } from "react-router-dom";
import NotFound  from "../../pages/notFound/NotFound";
import { paths } from "../../core/constants";
import Product from "../../pages/product/Product";
import CreateProducts from "../../pages/product/CreateProducts";
import UpdateProduct from "../../pages/product/UpdateProduct";
import DetalleProduct from "../../pages/product/DetalleProduct";

const LoggedInRouting = () => {
  return (
    <div>
      <Routes>
        <Route path={paths.DASHBOARD} element={<div>Hola</div>} />
        <Route path="/detalle-product/:id" element={<DetalleProduct/>} />
        <Route path="/edit-product/:id" element={<UpdateProduct/>} />
        <Route path="/create-product" element={<CreateProducts/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/logout" element={<Container>Adios</Container>} />
        <Route path="/not-found" Component={NotFound} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};
export default LoggedInRouting;
