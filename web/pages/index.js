import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Home from '../components/organisms/home'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
  
    <Container maxWidth = "lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant = "h1" align = "center">
              MARKETPLACE
            </Typography>
            <Typography variant = "h3" align = "center">
                { "The NFT home for small and growing content creators"}
            </Typography>
          </Grid>
          <Home/>
        </Grid>
      </div>
    </Container>
	
  );
}