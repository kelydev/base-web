import React, { useState } from "react";
import { Button, Grid, Paper, Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLoginMutation } from "../../stateManagement/apiSlices/userApi";
import { useNavigate } from "react-router-dom";
import useTheme from '@mui/material/styles/useTheme';

const Login: React.FC = () => {

  const navigate = useNavigate();
  const defaultTheme = createTheme();
  const theme = useTheme();

  const [login, { isLoading }] = useLoginMutation();
  const [token, setToken]= useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitForm = () => {
    login({
      username: username,
      password: password,
    })
      .unwrap()
      .then((res: any) => { 
        setToken ( JSON.stringify(res));
        navigate("/product");
      })
      .catch((err: any) => { 
        setToken (JSON.stringify(err.data));
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 9, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Box 
              component="img"
              sx={{ height: 43, width: 200,}}
              alt="ruway"
              src="https://ruway.tech/static/media/logo.0daae2dc.png"
            />
              <Typography 
                component="h2" 
                variant="h5" 
                fontWeight="bold" 
                fontSize={24}
                sx={{
                  marginTop: '10px',
                  marginBottom: '20px',
                  marginRight: '0px',
                  marginLeft: '0px',
                  paddingTop: '16px',
                  paddingBottom: '16px',
                }}
              >
                Iniciar Sesion
              </Typography>

            <Box component="form" noValidate onSubmit={handleSubmitForm} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Usuario"
                name="email"
                variant="outlined" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Contraseña"
                name="password"
                id="password"
                variant="outlined"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#6600FF', color: '#ffffff' }}
                sx={{
                  mt: '18px',
                  pt: '10px',
                  pb: '10px',
                }}
                disabled={isLoading} 
                onClick ={handleSubmitForm}
              >
                Inicia sesión
              </Button>
              <br />
              {token && <p style={{ color: 'red', fontSize: '13px' }}>{token}</p>}
              <p>johnd</p>
              <p>m38rmF$</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;