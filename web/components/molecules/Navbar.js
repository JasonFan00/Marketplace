import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Insert LOGO Here
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}