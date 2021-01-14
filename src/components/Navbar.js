import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        width: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '60px',
        color: 'White',
        fontSize: '32px',
        letterSpacing: '3px',
        fontWeight: '800',
    },
    urls: {
        whiteSpace: 'pre-wrap',
        marginRight: '100px',
        textTransform: 'uppercase',

    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        NA
            <span style={{ color: '#00b0dc' }}>
                            ZIM
            </span>
                    </Typography>
                    <Typography className={classes.urls}>
                        <a href={Navbar} style={{ color: '#00b0dc' }}>Home</a> {"       "}
                        <a href={Navbar}>About</a> {"      "}
                        <a href={Navbar}>Services</a>{"        "}
                        <a href={Navbar}>Projects</a>{"        "}
                        <a href={Navbar}>Contact</a>{"        "}
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
