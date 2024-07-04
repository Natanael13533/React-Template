import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Menyala Abangku
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" paragraph>
        Welcome to Menyala Abangku!
      </Typography>
      <Typography variant="body1" paragraph>
        Contoh sajah
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Mision Statoo
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, mb: 2 }}>A</Avatar>
              <Typography variant="h6" component="h3">
                Sokap tuh?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CEO
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, mb: 2 }}>B</Avatar>
              <Typography variant="h6" component="h3">
                Walawe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CTO
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, mb: 2 }}>C</Avatar>
              <Typography variant="h6" component="h3">
                Yessiirr
              </Typography>
              <Typography variant="body2" color="text.secondary">
                COO
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
