import React from 'react';
import Particles from 'react-particles-js';
import Typing from 'react-typing-animation';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar.js'


import image1 from '../images/1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    background: {
        backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${image1})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '700px',
        backgroundColor: 'black'
    },
    paper: {
        marginTop: '150px',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent'
    },
    heading: {
        marginTop: '-400px',
        color: 'white',
        fontSize: '15px',
        textAlign: 'center',
        fontWeight: 600
    },
    particle: {
        position: 'relative',
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Navbar />
                <div className={classes.animation}>
                    <Particles />
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={12} >
                            {/* <Paper className={classes.paper}>xs=12</Paper> */}
                            <div className={classes.heading}>
                                <h1>I'm Nazim Firdous Ali</h1>
                                
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
