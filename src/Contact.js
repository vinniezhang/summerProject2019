import React from  'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
    },
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

export default function ContactText() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        // multiline: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <main>
            <div className={classes.drawerHeader} />

            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '30rem', height: '38rem', margin:'auto', marginTop:'6%', borderRadius:'15px'}}
            >
                <Typography style={{fontWeight:'bold', fontSize:'28px', textAlign:'center', paddingTop:'5%', fontFamily:'Helvetica', color:'#4e4f52'}}>Contact Us</Typography>
                <p style={{textAlign:'center'}}>Let us know what you think!</p>

                <div style={{textAlign:'center', paddingTop:'5%'}}>
                    <FormControl style={{width:'350px'}}>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="userInput" />
                    </FormControl>
                </div>

                <div style={{textAlign:'center', paddingTop:'5%'}}>
                    <FormControl style={{width:'350px'}}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input name="email" type='email' autoComplete='email' id="userEmail" />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </div>

                <div style={{textAlign:'center', marginTop:'5%'}}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Compose Message"
                        multiline
                        rowsMax="8"
                        rows={'8'}
                        placeholder=''
                        onChange={handleChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        style={{width: '360px'}}
                    />
                </div>

                <div style={{textAlign:'center', paddingTop: '15px'}}>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" className={classes.button}>
                            Submit
                        </Button>
                    </label>
                </div>
            </Box>

        </main>
    );
}