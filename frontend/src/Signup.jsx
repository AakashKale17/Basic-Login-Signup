import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
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


const Signup = () =>{
  const [values, setValues] = React.useState({
    username: '',
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
    if(err.username === "" && err.email === "" && err.password === "") {
        axios.post('http://localhost:8081/signup', values)
        .then(res => {
          navigate('/');
        })
        .catch (err => console.log(err));
    }  
  }

  return (
    <ThemeProvider theme={theme}>
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              {errors.username && <span> 
                <Alert severity="error">
                {errors.username}
                </Alert>
                </span>}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInput}
                />
              </Grid>
              {errors.email && <span> 
                <Alert severity="error">  
                {errors.email}
                </Alert>
                </span>}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInput}
                />
              </Grid>
              {errors.password && <span>
                <Alert severity="error">
                 {errors.password}
                 </Alert> 
                 </span>}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="confirm-password"
                  onChange={handleInput}
                />
              </Grid>
              {errors.password && <span>
                <Alert severity="error">
                 {errors.password}
                 </Alert>
                 </span>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to ="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
