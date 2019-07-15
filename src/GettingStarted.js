import React from  'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Select} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


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

export default function Start() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        race:'',
        gender:'',
        degree:'',
        sat:'',
        act:'',
        location:'',
        size:'',
        financial_income:'',
    });

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <main>
            <div className={classes.drawerHeader} />
            <Typography style={{color:'#4e4f52', textAlign:'center', paddingTop:'5%', fontFamily:"Roboto, Helvetica, Arial, sans-serif", fontWeight:'bold'}} variant='h4'>Let's Get Started</Typography>
            <Typography paragraph style={{margin:'auto', textAlign:'center', paddingTop:'50px', paddingBottom:'1%', maxWidth:'70%', fontSize:'18px'}}>
                Please fill out the following questions about yourself:
            </Typography>

            <div style={{textAlign:'center', marginBottom:'100px'}} id={"personal_section"}>

                <Typography style={{padding:'25px'}}>Personal</Typography>

                <FormControl className={classes.formControl} >
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={values.gender}
                        onChange={handleChange}
                        inputProps={{
                            name: 'gender'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Other'}>Non-Binary / Other</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>

                <FormControl className={classes.formControl}>
                    <InputLabel>Race</InputLabel>
                    <Select
                        value={values.race}
                        onChange={handleChange}
                        inputProps={{
                            name: 'race'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Caucasian'}>Caucasian</MenuItem>
                        <MenuItem value={'Black or African American'}>Black or African American</MenuItem>
                        <MenuItem value={'Asian'}>Asian</MenuItem>
                        <MenuItem value={'American Indian or Alaska Native'}>American Indian or Alaska Native</MenuItem>
                        <MenuItem value={'Native Hawaiian or Other Pacific Islander'}>Native Hawaiian or Other Pacific Islander</MenuItem>
                        <MenuItem value={'Hispanic or Latino'}>Hispanic or Latino</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>

                <Typography style={{padding:'25px'}}>Financial</Typography>

                <FormControl className={classes.formControl}>
                    <InputLabel>Annual Household Income</InputLabel>
                    <Select
                        value={values.financial_income}
                        onChange={handleChange}
                        inputProps={{
                            name: 'financial_income'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'> $25k'}>$0 - $25,000</MenuItem>
                        <MenuItem value={'25k-50k'}>$25,000 - $50,000</MenuItem>
                        <MenuItem value={'50k - 75k'}>$50,000 - $75,000</MenuItem>
                        <MenuItem value={'75k - 100k'}>$75,000 - $100,000</MenuItem>
                        <MenuItem value={'100k - 150k'}>$100,000 - $150,000</MenuItem>
                        <MenuItem value={'150k - 200k'}>$150,000 - $200,000</MenuItem>
                        <MenuItem value={'> 200k'}> > $200,000</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>

                <Typography style={{padding:'25px'}}>Academic</Typography>

                <FormControl className={classes.formControl}>
                    <InputLabel>Composite SAT Score</InputLabel>
                    <Select
                        value={values.sat}
                        onChange={handleChange}
                        inputProps={{
                            name: 'sat'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'> 200'}>Under 200</MenuItem>
                        <MenuItem value={'200 - 400'}>200 - 400</MenuItem>
                        <MenuItem value={'400 -600'}>400 - 600</MenuItem>
                        <MenuItem value={'600 - 800'}>600 - 800</MenuItem>
                        <MenuItem value={'800 - 1000'}>800 - 1000</MenuItem>
                        <MenuItem value={'1000 - 1200'}>1000 - 1200</MenuItem>
                        <MenuItem value={'1200 - 1400'}>1200 - 1400</MenuItem>
                        <MenuItem value={'1400 - 1600'}>1400 - 1600</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>

                <FormControl className={classes.formControl}>
                    <InputLabel>Composite ACT Score</InputLabel>
                    <Select
                        value={values.act}
                        onChange={handleChange}
                        inputProps={{
                            name: 'act'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'under10'}>Under 10</MenuItem>
                        <MenuItem value={'10'}>10</MenuItem>
                        <MenuItem value={'11'}>11</MenuItem>
                        <MenuItem value={'12'}>12</MenuItem>
                        <MenuItem value={'13'}>13</MenuItem>
                        <MenuItem value={'14'}>14</MenuItem>
                        <MenuItem value={'15'}>15</MenuItem>
                        <MenuItem value={'16'}>16</MenuItem>
                        <MenuItem value={'17'}>17</MenuItem>
                        <MenuItem value={'18'}>18</MenuItem>
                        <MenuItem value={'19'}>19</MenuItem>
                        <MenuItem value={'20'}>20</MenuItem>
                        <MenuItem value={'21'}>21</MenuItem>
                        <MenuItem value={'22'}>22</MenuItem>
                        <MenuItem value={'23'}>23</MenuItem>
                        <MenuItem value={'24'}>24</MenuItem>
                        <MenuItem value={'25'}>25</MenuItem>
                        <MenuItem value={'26'}>26</MenuItem>
                        <MenuItem value={'27'}>27</MenuItem>
                        <MenuItem value={'28'}>28</MenuItem>
                        <MenuItem value={'29'}>29</MenuItem>
                        <MenuItem value={'30'}>30</MenuItem>
                        <MenuItem value={'31'}>31</MenuItem>
                        <MenuItem value={'32'}>32</MenuItem>
                        <MenuItem value={'33'}>33</MenuItem>
                        <MenuItem value={'34'}>34</MenuItem>
                        <MenuItem value={'35'}>35</MenuItem>
                        <MenuItem value={'36'}>36</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>


                <Typography paragraph style={{margin:'auto', textAlign:'center', paddingTop:'50px', paddingBottom:'1%', maxWidth:'70%', fontSize:'18px'}}>
                    Please fill out the following about your college preferences:
                </Typography>

                <br/><br/>

                <FormControl className={classes.formControl}>
                    <InputLabel>Degree Type</InputLabel>
                    <Select
                        value={values.degree}
                        onChange={handleChange}
                        inputProps={{
                            name: 'degree'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Bachelor'}>Bachelor's</MenuItem>
                        <MenuItem value={'Associate'}>Associate's</MenuItem>
                        <MenuItem value={'Masters'}>Master's</MenuItem>
                        <MenuItem value={'PhD'}>PhD</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>

                <FormControl className={classes.formControl}>
                    <InputLabel>Student Body Population</InputLabel>
                    <Select
                        value={values.size}
                        onChange={handleChange}
                        inputProps={{
                            name: 'size'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'tiny'}>Under 1,000</MenuItem>
                        <MenuItem value={'small'}>1,000 - 5,000</MenuItem>
                        <MenuItem value={'medium'}>5,000 - 10,000</MenuItem>
                        <MenuItem value={'large'}>10,000 - 20,000</MenuItem>
                        <MenuItem value={'huge'}> > 20,000</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>

                <FormControl className={classes.formControl}>
                    <InputLabel>Location</InputLabel>
                    <Select
                        value={values.location}
                        onChange={handleChange}
                        inputProps={{
                            name: 'location'
                        }}
                        style={{
                            width:'300px'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Alabama'}>Alabama</MenuItem>
                        <MenuItem value={'Alaska'}>Alaska</MenuItem>
                        <MenuItem value={'Arizona'}>Arizona</MenuItem>
                        <MenuItem value={'Arkansas'}>Arkansas</MenuItem>
                        <MenuItem value={'California'}>California</MenuItem>
                        <MenuItem value={'Colorado'}>Colorado</MenuItem>
                        <MenuItem value={'Conneticut'}>Conneticut</MenuItem>
                        <MenuItem value={'Delaware'}>Delaware</MenuItem>
                        <MenuItem value={'Florida'}>Florida</MenuItem>
                        <MenuItem value={'Georgia'}>Georgia</MenuItem>
                        <MenuItem value={'Hawaii'}>Hawaii</MenuItem>
                        <MenuItem value={'Idaho'}>Idaho</MenuItem>
                        <MenuItem value={'Illinois'}>Illinois</MenuItem>
                        <MenuItem value={'Indiana'}>Indiana</MenuItem>
                        <MenuItem value={'Iowa'}>Iowa</MenuItem>
                        <MenuItem value={'Kansas'}>Kansas</MenuItem>
                        <MenuItem value={'Kentucky'}>Kentucky</MenuItem>
                        <MenuItem value={'Louisiana'}>Louisiana</MenuItem>
                        <MenuItem value={'Maine'}>Maine</MenuItem>
                        <MenuItem value={'Maryland'}>Maryland</MenuItem>
                        <MenuItem value={'Massachusetts'}>Massachusetts</MenuItem>
                        <MenuItem value={'Michigan'}>Michigan</MenuItem>
                        <MenuItem value={'Minnesota'}>Minnesota</MenuItem>
                        <MenuItem value={'Mississippi'}>Mississippi</MenuItem>
                        <MenuItem value={'Missouri'}>Missouri</MenuItem>
                        <MenuItem value={'Montana'}>Montana</MenuItem>
                        <MenuItem value={'Nebraska'}>Nebraska</MenuItem>
                        <MenuItem value={'Nevada'}>Nevada</MenuItem>
                        <MenuItem value={'New Hampshire'}>New Hampshire</MenuItem>
                        <MenuItem value={'New Jersey'}>New Jersey</MenuItem>
                        <MenuItem value={'New Mexico'}>New Mexico</MenuItem>
                        <MenuItem value={'New York'}>New York</MenuItem>
                        <MenuItem value={'North Carolina'}>North Carolina</MenuItem>
                        <MenuItem value={'North Dakota'}>North Dakota</MenuItem>
                        <MenuItem value={'Ohio'}>Ohio</MenuItem>
                        <MenuItem value={'Oklahoma'}>Oklahoma</MenuItem>
                        <MenuItem value={'Oregon'}>Oregon</MenuItem>
                        <MenuItem value={'Pennsylvania'}>Pennsylvania</MenuItem>
                        <MenuItem value={'Rhode Island'}>Rhode Island</MenuItem>
                        <MenuItem value={'South Carolina'}>South Carolina</MenuItem>
                        <MenuItem value={'South Dakota'}>South Dakota</MenuItem>
                        <MenuItem value={'Tennessee'}>Tennessee</MenuItem>
                        <MenuItem value={'Texas'}>Texas</MenuItem>
                        <MenuItem value={'Utah'}>Utah</MenuItem>
                        <MenuItem value={'Vermont'}>Vermont</MenuItem>
                        <MenuItem value={'Virgina'}>Virgina</MenuItem>
                        <MenuItem value={'Washington'}>Washington</MenuItem>
                        <MenuItem value={'West Virgina'}>West Virgina</MenuItem>
                        <MenuItem value={'Wisconsin'}>Wisconsin</MenuItem>
                        <MenuItem value={'Wyoming'}>Wyoming</MenuItem>
                    </Select>
                </FormControl>

                <br/><br/>
                <Button style={{marginTop:'30px'}} variant="contained">Submit</Button>

                {console.log("values: ", values)}
            </div>
        </main>
    );
}