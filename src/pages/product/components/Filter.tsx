import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import { useGetAllCategoryQuery, useGetProductCategoryQuery } from "../../../stateManagement/apiSlices/productApi";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Filter: React.FC<any> = ({ datas = ([]) => {} }) => {
  const [selectedValue, setSelectedValue] = useState<any>('electronics');
  const { data: categoriesData = [] } = useGetAllCategoryQuery({});
  const { data: productData = [] } = useGetProductCategoryQuery(selectedValue);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  useEffect(() => {
    if (productData && productData.length > 0) {
      datas(productData);
      console.log(productData);
    }
  }, [productData]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 250 }}>
        <Select
          value={selectedValue}
          onChange={handleChange}
        >
          <MenuItem value={'electronics'}>
            <em>Todos</em>
          </MenuItem>
          {categories.map((categorie: any) => (
            <MenuItem key={categorie} value={categorie}>
              {categorie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default Filter;
