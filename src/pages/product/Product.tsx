import React, { useState } from "react";
import Filter from './components/Filter';
import Search from './components/Search';
import '@fontsource/roboto';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import {
  Button, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent,
  Container, 
  Box, 
  Typography, 
  Grid,
  BorderColorIcon,
  RemoveCircleIcon,
  StarBorderPurple500SharpIcon,
  StarPurple500SharpIcon,
  StarHalfSharpIcon,
  IconButton,
  VisibilityIcon,
} from "../../components/material";

const Product: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCard, setSelectedCard] = useState("");
  const [lockedCard, setLockedCard] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleData = (dataa: []) => {
    setProducts(dataa);
  };

  const handleEditProduct = (productId: string) => {
    setSelectedCard(productId);
    navigate(`/edit-product/${productId}`);
  };

  const filteredProducts = products.filter((product: any) => {
    const productTitle = product.title.toLowerCase();
    return productTitle.includes(searchValue.toLowerCase());
  });

  const handleAdd = () => {
    navigate('/create-product');
  };

  const handleViewProductDetail = (productId: string) => {
    navigate(`/detalle-product/${productId}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '100%',
            textAlign: 'center',
            padding: '16px',
            margin: '8px',
          }}
        >
          <Grid >
            <img
              src="https://ruway.tech/static/media/logo.0daae2dc.png"
              alt="ruway"
              style={{
                height: 43,
                width: 200,
                margin: '0 auto', // Centra la imagen horizontalmente
              }}
            />
          </Grid>
          <Filter datas={handleData} />
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Grid>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{
                  ml: 2,
                  padding: '8px', // Agrega padding de 8px
                  margin: '0', // Elimina el margin
                }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={() => navigate('/')}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>

        <Button variant="contained" onClick={handleAdd}> Agregar + </Button>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {filteredProducts.map((product: any) => (
              <Grid xs={12} sm={6} md={3} key={product.id}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                >
                  <CardHeader
                    action={
                      <Button variant="contained" size="small" style={{ backgroundColor: '#D23F57' }}>
                        -{product.rating.rate}%
                      </Button>
                    }
                  />
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt="image-product"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'contain',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 4, textAlign: 'center' }}>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      sx={{
                        fontSize: '14px',
                        fontFamily: "Roboto",
                        textAlign: 'center',
                        marginTop: '10px'
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: '#717171',
                        marginTop: '10px'
                      }}
                    >
                      s/.{product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '12px',
                        color: '#717171',
                        marginTop: '10px'
                      }}
                    >
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        if (product.rating.rate >= starValue) {
                          return <StarPurple500SharpIcon key={index} fontSize="small" style={{ color: 'yellow' }} />;
                        } else if (product.rating.rate >= starValue - 0.5) {
                          return <StarHalfSharpIcon key={index} fontSize="small" style={{ color: 'yellow' }} />;
                        } else {
                          return <StarBorderPurple500SharpIcon key={index} fontSize="small" style={{ color: '#717171' }} />;
                        }
                      })}  ({product.rating.count})
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: '#6600FF',
                        color: '#ffffff',
                      }}
                      onClick={() => handleEditProduct(product.id)}
                    >
                      Editar
                    </Button>
                    <IconButton 
                      aria-label="delete" 
                      onClick={() => handleViewProductDetail(product.id)}
                      sx={{ color: '606C5D' }}>
                      <VisibilityIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Product;