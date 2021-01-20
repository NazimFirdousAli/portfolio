import React from 'react';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar.js';

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
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 600
    },
    heading1: {
        fontSize: '20px',

    },
    svgLink: {
        marginTop: '-1200px',
        textAlign: 'center',
        marginTop: 20

    },
    particle: {
        position: 'relative',
    },
    multicolorIcon: {
        display: 'inlineBlock',
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Navbar />
                <div className={classes.animation}>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 100,
                                    density: {
                                        enable: true,
                                        value_area: 1000,
                                    }
                                },
                            },
                        }}
                    />
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={12} >
                            {/* <Paper className={classes.paper}>xs=12</Paper> */}
                            <div className={classes.heading}>
                                <h1>I'm Nazim Firdous Ali</h1>
                                <div className={classes.heading1}>
                                    <Typewriter
                                        options={{
                                            strings: ['Web Developer ', 'SQA Engineer ', 'Datascience Engineer '],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 1,
                                            delay: 25
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={classes.svgLink}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30pt" height="30pt" viewBox="0 0 10 10" version="1.1">
                                    <g id="surface1">
                                        <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(23.137255%,34.901961%,59.607843%)', fillOpacity: 1 }} d="M 10 5 C 10 7.761719 7.761719 10 5 10 C 2.238281 10 0 7.761719 0 5 C 0 2.238281 2.238281 0 5 0 C 7.761719 0 10 2.238281 10 5 Z M 10 5 " />
                                        <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,100%,100%)', fillOpacity: 1 }} d="M 6.257812 5.195312 L 5.363281 5.195312 L 5.363281 8.464844 L 4.011719 8.464844 L 4.011719 5.195312 L 3.371094 5.195312 L 3.371094 4.046875 L 4.011719 4.046875 L 4.011719 3.304688 C 4.011719 2.773438 4.265625 1.941406 5.375 1.941406 L 6.378906 1.945312 L 6.378906 3.058594 L 5.652344 3.058594 C 5.53125 3.058594 5.363281 3.117188 5.363281 3.371094 L 5.363281 4.046875 L 6.375 4.046875 Z M 6.257812 5.195312 " />
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30pt" height="30pt" viewBox="0 0 20 20" version="1.1">
                                    <g id="surface1">
                                        <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,46.666667%,71.764706%)', fillOpacity: 1 }} d="M 18.191406 0 L 1.808594 0 C 0.808594 0 0 0.808594 0 1.808594 L 0 18.191406 C 0 19.191406 0.808594 20 1.808594 20 L 18.191406 20 C 19.191406 20 20 19.191406 20 18.191406 L 20 1.808594 C 20 0.808594 19.191406 0 18.191406 0 Z M 6.1875 17.269531 C 6.1875 17.558594 5.953125 17.796875 5.664062 17.796875 L 3.421875 17.796875 C 3.128906 17.796875 2.894531 17.558594 2.894531 17.269531 L 2.894531 7.875 C 2.894531 7.582031 3.128906 7.347656 3.421875 7.347656 L 5.664062 7.347656 C 5.953125 7.347656 6.1875 7.582031 6.1875 7.875 Z M 4.542969 6.460938 C 3.367188 6.460938 2.414062 5.507812 2.414062 4.332031 C 2.414062 3.15625 3.367188 2.203125 4.542969 2.203125 C 5.71875 2.203125 6.671875 3.15625 6.671875 4.332031 C 6.671875 5.507812 5.71875 6.460938 4.542969 6.460938 Z M 17.902344 17.3125 C 17.902344 17.578125 17.683594 17.796875 17.417969 17.796875 L 15.011719 17.796875 C 14.746094 17.796875 14.527344 17.578125 14.527344 17.3125 L 14.527344 12.90625 C 14.527344 12.246094 14.722656 10.023438 12.808594 10.023438 C 11.328125 10.023438 11.027344 11.546875 10.96875 12.230469 L 10.96875 17.3125 C 10.96875 17.578125 10.75 17.796875 10.484375 17.796875 L 8.15625 17.796875 C 7.890625 17.796875 7.671875 17.578125 7.671875 17.3125 L 7.671875 7.832031 C 7.671875 7.566406 7.890625 7.347656 8.15625 7.347656 L 10.484375 7.347656 C 10.75 7.347656 10.96875 7.566406 10.96875 7.832031 L 10.96875 8.652344 C 11.515625 7.828125 12.332031 7.191406 14.070312 7.191406 C 17.921875 7.191406 17.902344 10.789062 17.902344 12.765625 Z M 17.902344 17.3125 " />
                                    </g>
                                </svg> */}

                                <div className={classes.multicolorIcon}>
                                    <a href="https://www.facebook.com/" >
                                        <svg width="20pt" height="20pt" viewBox="0 0 20 20" version="1.1">
                                            <g id="surface1">
                                                <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(23.137255%,34.901961%,59.607843%)', fillOpacity: 1 }} d="M 20 10 C 20 15.523438 15.523438 20 10 20 C 4.476562 20 0 15.523438 0 10 C 0 4.476562 4.476562 0 10 0 C 15.523438 0 20 4.476562 20 10 Z M 20 10 " />
                                                <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(100%,100%,100%)', fillOpacity: 1 }} d="M 12.515625 10.390625 L 10.730469 10.390625 L 10.730469 16.929688 L 8.027344 16.929688 L 8.027344 10.390625 L 6.742188 10.390625 L 6.742188 8.09375 L 8.027344 8.09375 L 8.027344 6.605469 C 8.027344 5.542969 8.53125 3.878906 10.753906 3.878906 L 12.757812 3.886719 L 12.757812 6.117188 L 11.304688 6.117188 C 11.066406 6.117188 10.730469 6.238281 10.730469 6.742188 L 10.730469 8.097656 L 12.75 8.097656 Z M 12.515625 10.390625 " />
                                            </g>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
