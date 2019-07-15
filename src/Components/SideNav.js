import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import BarChartIcon from '@material-ui/icons/BarChart';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { Link, BrowserRouter, Route } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{padding: '10px'}}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to={'/'} style={{textDecoration: 'none', color:'white', margin:'auto', fontWeight:'bold', fontSize:'27px'}}>
                        <Typography style={{margin:'auto', fontWeight:'bold', fontSize:'27px'}} variant="h6" className={classes.title}>
                            C A T C H
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider style={{marginTop:'20px'}}/>
                <List>
                    <Link to={"/"} style={{textDecoration:'none', color: 'black'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary={"Who We Are"} />
                        </ListItem>
                    </Link>

                    <Link to={"/GettingStarted"} style={{textDecoration:'none', color: 'black'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <KeyboardIcon style={{color:'black'}}/>
                            </ListItemIcon>
                            <ListItemText primary={"Getting Started"} />
                        </ListItem>
                    </Link>

                    <Link to={"/Results"} style={{textDecoration:'none', color: 'black'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <BarChartIcon color={'secondary'}/>
                            </ListItemIcon>
                            <ListItemText primary={"Results Breakdown"} />
                        </ListItem>
                    </Link>

                    <Link to={"/Contact"} style={{textDecoration:'none', color: 'black'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <EmailIcon style={{color:'#e6c15c'}} />
                            </ListItemIcon>
                            <ListItemText primary={"Contact Us"} />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}