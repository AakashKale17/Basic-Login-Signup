import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Validation from './Validation';
import Alert from '@mui/material/Alert';
import axios from 'axios';


const theme = createTheme({
    palette: {
      mode: 'dark',  
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

const Login = () => {
    const [values, setValues] = React.useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = React.useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/', values)
            .then(res => {
              if (res.data === "Success") {
                navigate('/welcome');
              } else {
                  alert("No such record!");
              }
            })
            .catch (err => console.log(err));
        }  
    }

    return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInput}
            />
            {errors.email && <span>
            <Alert severity="error">  
            {errors.email}
            </Alert>
            </span>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInput}
            />
            {errors.password && <span>
              <Alert severity="error">
               {errors.password}
               </Alert>
               </span>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to ="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    )
}

export default Login;