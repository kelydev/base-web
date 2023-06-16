//import React, { useState, useEffect} from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useGetAllProductQuery } from "../../stateManagement/apiSlices/productApi";

const Product: React.FC = () =>  {

    const [products, setProducts] = React.useState([]);
    const {data=[],  isLoading, error} = useGetAllProductQuery({});

    React.useEffect(() => {
        setProducts(data);
    }, [data]);

    console.log(products);

    return (
        <div>
            <h1>Lista de Productos</h1>

            {products.map((product:any , index:any) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                <hr />
                </div>
            ))}
        </div>
    );
};

export default Product;
