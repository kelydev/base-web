import React from "react";
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../stateManagement/apiSlices/productApi";
import { useNavigate } from "react-router-dom";
import {productDto} from "../../stateManagement/models/product/productDto";
import { 
  Container, 
  Box, 
  Typography,
  Button,
  Grid,
  TextField,
} from "../../components/material";

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const [newProduct, { isLoading }] = useCreateProductMutation();
  const { handleSubmit, register, reset } = useForm<productDto>();

  const onSubmit = (data: productDto) => {
    newProduct(data)
      .unwrap()
      .then((res: any) => {
        const product = JSON.stringify(res);
        console.log(product);
        reset();
      })
      .catch((err: any) => {
        const errorData = JSON.stringify(err.data);
        console.log(errorData);
      });
  };

  return (
    <>
    <Container maxWidth="lg" sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', padding: '50px' }}>
      <Box sx={{ width: '100%',height: '100%',p: '50px'}}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', fontSize: '30px'}}>
            Agregar un Producto
        </Typography>
        <Box sx={{
          width: '100%',
          height: '100%',
          bgcolor: '#ECF8F9',
          p: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          aligns: 'center',
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1} sx={{ p: '30px',}}>
              <Grid xs={12} sm={6}>
                <div>
                  <label htmlFor="title">Nombre del producto:</label>
                  <TextField {...register('title')} id="title" variant="outlined" fullWidth />
                </div>
              </Grid>
              <Grid xs={12} sm={6}>
                <div>
                  <label htmlFor="price">Precio:</label>
                  <TextField {...register('price')} id="price" variant="outlined" fullWidth />
                </div>
              </Grid>
              <Grid xs={12} sm={6}>
                <div>
                  <label htmlFor="price">Categoria:</label>
                  <TextField {...register('category')}id="price" variant="outlined" fullWidth />
                </div>
              </Grid>
              <Grid xs={12} sm={6}>
                <div>
                  <label htmlFor="description">Imagen:</label>
                  <TextField {...register('image')} id="description" variant="outlined" fullWidth />
                </div>
              </Grid>
              <Grid xs={12}>
                <div>
                  <label htmlFor="image">Descripción:</label>
                  <TextField {...register('description')} id="image" variant="outlined" fullWidth multiline rows={6} />
                </div>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" disabled={isLoading} style={{ marginTop: '20px' }}>
              Guardar
            </Button>
            <Button onClick={() => navigate('/product')} variant="contained" style={{marginTop: '20px', marginLeft: '20px', backgroundColor:'606C5D'}}>
              Regresar a Catalogo
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  </>  
  );
};

export default CreateProduct;