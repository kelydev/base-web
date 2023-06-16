import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Box, 
  Typography, 
  Grid,
  BorderColorIcon,
  RemoveCircleIcon,
  StarBorderPurple500SharpIcon,
  StarPurple500SharpIcon,
  StarHalfSharpIcon,
  CircularProgress,
  IconButton,
} from "../../components/material";
import { useGetProductQuery, useDeleteProductQuery } from "../../stateManagement/apiSlices/productApi";

const DetalleProduct: React.FC<any> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: productData = [], isLoading: productLoading } = useGetProductQuery(id);
  const { data: product, isLoading: deleteLoading, isError} = useDeleteProductQuery(id);

  const handleDelete = () => {
    console.log('Producto eliminado:', product);
    //navigate('/product'); 
  };

  if (productLoading || deleteLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', minHeight: '100vh', height: '100vh', alignItems: 'center', padding: '50px'}}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <Box sx={{display: 'flex', justifyContent: 'center', pt: '130px'}}>
                <img 
                  src={productData.image}
                  alt="Imagen"
                  style={{
                    maxWidth: '70%',
                    maxHeight: '70%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ padding: '20px', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                  <IconButton 
                    aria-label="edit" 
                    onClick={() => navigate(`/edit-product/${id}`)}
                    sx={{ color: 'blue' }}
                    >
                    <BorderColorIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="delete" 
                    onClick={handleDelete}
                    sx={{ color: 'red' }}>
                    <RemoveCircleIcon />
                  </IconButton>
                </Box>
                <Box sx={{marginTop: '10px' }}>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      flexGrow: 1,
                      fontSize: '27px',
                      fontFamily: 'Roboto',
                      marginTop: '25px',
                      '@media (max-width: 600px)': {
                        fontSize: '20px',
                      },
                      '@media (max-width: 400px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {productData.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      marginTop: '10px'
                    }}
                  >
                    {productData.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '16px',
                      color: '#717171',
                      marginTop: '10px'
                    }}
                  >
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        if (productData.rating?.rate >= starValue) {
                          return <StarPurple500SharpIcon key={index} style={{ color: '#FECB00', fontSize: '25px' }} />;
                        } else if (productData.rating?.rate >= starValue - 0.5) {
                          return <StarHalfSharpIcon key={index} style={{ color: 'FECB00', fontSize: '25px' }} />;
                        } else {
                          return <StarBorderPurple500SharpIcon key={index} style={{ color: '#717171', fontSize: '25px'}} />;
                        }
                      })}  ({productData.rating?.count})
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontFamily: 'Roboto',
                      marginTop: '8px'
                    }}
                  >
                    {productData.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '25px',
                      fontFamily: 'Roboto',
                      marginTop: '20px',
                      color: '#717171',
                    }}
                  >
                    s/ {productData.price}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DetalleProduct;