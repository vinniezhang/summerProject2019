import React from  'react';
import Typography from '@material-ui/core/Typography';
import {Select} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actionCreators from '../actions'
import {fetchData, fetchSchools} from "../actions";


// export const isolateSchools = (schools) => {
//     Object.keys(schools).map(function (key) {
//         console.log("in function: ", schools[key]);
//         return <Typography>${schools[key]}</Typography>
//     })
// };

export class Start extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            race: '',
            gender: '',
            degree: null,
            sat: '',
            act: null,
            state: '',
            size: '',
            financial_income: '',
            financial_aid: '',
            schools:[]
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    isolateSchools(schools) {
        Object.keys(schools).map(function (key) {
                console.log("in function: ", schools[key]);
                return <Typography>${schools[key]}</Typography>
        })
    };

    render() {

        const user = {
            race: this.state.race,
            gender: this.state.gender,
            degree: this.state.degree,
            sat_score: this.state.sat,
            act_score: this.state.act,
            state: this.state.state,
            size: this.state.size,
            financial_income: this.state.financial_income,
            financial_aid: this.state.financial_aid,
        }

        const {schools} = this.props;
        console.log("schools: ", this.props.schools);

        return (
            <main>
                <Grid>
                    <Typography style={{
                        color: '#4e4f52',
                        textAlign: 'center',
                        marginTop: '3%',
                        paddingTop: '5%',
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 'bold'
                    }} variant='h4'>Let's Get Started</Typography>
                    <Typography paragraph style={{
                        margin: 'auto',
                        textAlign: 'center',
                        paddingTop: '50px',
                        paddingBottom: '1%',
                        maxWidth: '70%',
                        fontSize: '18px'
                    }}>
                        Please fill out the following questions about yourself:
                    </Typography>

                    <div style={{textAlign: 'center', marginBottom: '100px'}} id={"personal_section"}>

                        <form onSubmit={this.user}>

                            <Typography style={{padding: '25px'}}>Personal</Typography>

                            <FormControl>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'gender'
                                    }}
                                    style={{
                                        width: '300px'
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

                            <FormControl>
                                <InputLabel>Race</InputLabel>
                                <Select
                                    value={this.state.race}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'race'
                                    }}
                                    style={{
                                        width: '300px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Caucasian'}>Caucasian</MenuItem>
                                    <MenuItem value={'Black or African American'}>Black or African American</MenuItem>
                                    <MenuItem value={'Asian'}>Asian</MenuItem>
                                    <MenuItem value={'American Indian or Alaska Native'}>American Indian or Alaska
                                        Native</MenuItem>
                                    <MenuItem value={'Native Hawaiian or Other Pacific Islander'}>Native Hawaiian or Other
                                        Pacific Islander</MenuItem>
                                    <MenuItem value={'Hispanic or Latino'}>Hispanic or Latino</MenuItem>
                                </Select>
                            </FormControl>

                            <br/><br/>

                            <Typography style={{padding: '25px'}}>Financial</Typography>

                            <FormControl>
                                <InputLabel>Annual Household Income</InputLabel>
                                <Select
                                    value={this.state.financial_income}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'financial_income'
                                    }}
                                    style={{
                                        width: '300px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'< $25k'}>$0 - $25,000</MenuItem>
                                    <MenuItem value={'25k-50k'}>$25,000 - $50,000</MenuItem>
                                    <MenuItem value={'50k - 75k'}>$50,000 - $75,000</MenuItem>
                                    <MenuItem value={'75k - 100k'}>$75,000 - $100,000</MenuItem>
                                    <MenuItem value={'100k - 150k'}>$100,000 - $150,000</MenuItem>
                                    <MenuItem value={'150k - 200k'}>$150,000 - $200,000</MenuItem>
                                    <MenuItem value={'> 200k'}> > $200,000</MenuItem>
                                </Select>
                            </FormControl>

                            <br/><br/>

                            <FormControl>
                                <InputLabel>Will Apply for Financial Aid</InputLabel>
                                <Select
                                    value={this.state.financial_aid}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'financial_aid'
                                    }}
                                    style={{
                                        width: '300px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Yes'}>Yes</MenuItem>
                                    <MenuItem value={'No'}>No</MenuItem>
                                </Select>
                            </FormControl>

                            <br/><br/>

                            <Typography style={{padding: '25px'}}>Academic</Typography>

                            <FormControl>
                                <InputLabel>Composite SAT Score</InputLabel>
                                <Select
                                    value={this.state.sat}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'sat'
                                    }}
                                    style={{
                                        width: '300px'
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

                            <FormControl>
                                <InputLabel>Composite ACT Score</InputLabel>
                                <Select
                                    value={this.state.act}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'act'
                                    }}
                                    style={{
                                        width: '300px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                    <MenuItem value={13}>13</MenuItem>
                                    <MenuItem value={14}>14</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                    <MenuItem value={16}>16</MenuItem>
                                    <MenuItem value={17}>17</MenuItem>
                                    <MenuItem value={18}>18</MenuItem>
                                    <MenuItem value={19}>19</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={21}>21</MenuItem>
                                    <MenuItem value={22}>22</MenuItem>
                                    <MenuItem value={23}>23</MenuItem>
                                    <MenuItem value={24}>24</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={26}>26</MenuItem>
                                    <MenuItem value={27}>27</MenuItem>
                                    <MenuItem value={28}>28</MenuItem>
                                    <MenuItem value={29}>29</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                    <MenuItem value={31}>31</MenuItem>
                                    <MenuItem value={32}>32</MenuItem>
                                    <MenuItem value={33}>33</MenuItem>
                                    <MenuItem value={34}>34</MenuItem>
                                    <MenuItem value={35}>35</MenuItem>
                                    <MenuItem value={36}>36</MenuItem>
                                </Select>
                            </FormControl>

                            <br/><br/>

                            <Typography paragraph style={{
                                margin: 'auto',
                                textAlign: 'center',
                                paddingTop: '50px',
                                paddingBottom: '1%',
                                maxWidth: '70%',
                                fontSize: '18px'
                            }}>
                                Please fill out the following about your college preferences:
                            </Typography>

                            <br/><br/>

                            <FormControl>
                                <InputLabel>Degree Type</InputLabel>
                                <Select
                                    value={this.state.degree}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'degree'
                                    }}
                                    style={{
                                        width: '300px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={2}>Associate's</MenuItem>
                                    <MenuItem value={3}>Bachelor's</MenuItem>
                                    <MenuItem value={4}>Graduate's</MenuItem>
                                </Select>
                            </FormControl>

                            <br/><br/>

                            <FormControl>
                                <InputLabel>Student Body Population</InputLabel>
                                <Select
                                    value={this.state.size}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'size'
                                    }}
                                    style={{
                                        width: '300px'
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

                            <FormControl>
                                <InputLabel>State</InputLabel>
                                <Select
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'state'
                                    }}
                                    style={{
                                        width: '300px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'AL'}>Alabama</MenuItem>
                                    <MenuItem value={'AK'}>Alaska</MenuItem>
                                    <MenuItem value={'AZ'}>Arizona</MenuItem>
                                    <MenuItem value={'AR'}>Arkansas</MenuItem>
                                    <MenuItem value={'CA'}>California</MenuItem>
                                    <MenuItem value={'CO'}>Colorado</MenuItem>
                                    <MenuItem value={'CT'}>Conneticut</MenuItem>
                                    <MenuItem value={'DE'}>Delaware</MenuItem>
                                    <MenuItem value={'FL'}>Florida</MenuItem>
                                    <MenuItem value={'GA'}>Georgia</MenuItem>
                                    <MenuItem value={'HI'}>Hawaii</MenuItem>
                                    <MenuItem value={'ID'}>Idaho</MenuItem>
                                    <MenuItem value={'IL'}>Illinois</MenuItem>
                                    <MenuItem value={'IN'}>Indiana</MenuItem>
                                    <MenuItem value={'IA'}>Iowa</MenuItem>
                                    <MenuItem value={'KS'}>Kansas</MenuItem>
                                    <MenuItem value={'KY'}>Kentucky</MenuItem>
                                    <MenuItem value={'LA'}>Louisiana</MenuItem>
                                    <MenuItem value={'ME'}>Maine</MenuItem>
                                    <MenuItem value={'MD'}>Maryland</MenuItem>
                                    <MenuItem value={'MA'}>Massachusetts</MenuItem>
                                    <MenuItem value={'MI'}>Michigan</MenuItem>
                                    <MenuItem value={'MN'}>Minnesota</MenuItem>
                                    <MenuItem value={'MS'}>Mississippi</MenuItem>
                                    <MenuItem value={'MO'}>Missouri</MenuItem>
                                    <MenuItem value={'MT'}>Montana</MenuItem>
                                    <MenuItem value={'NE'}>Nebraska</MenuItem>
                                    <MenuItem value={'NV'}>Nevada</MenuItem>
                                    <MenuItem value={'NH'}>New Hampshire</MenuItem>
                                    <MenuItem value={'NJ'}>New Jersey</MenuItem>
                                    <MenuItem value={'NM'}>New Mexico</MenuItem>
                                    <MenuItem value={'NY'}>New York</MenuItem>
                                    <MenuItem value={'NC'}>North Carolina</MenuItem>
                                    <MenuItem value={'ND'}>North Dakota</MenuItem>
                                    <MenuItem value={'OH'}>Ohio</MenuItem>
                                    <MenuItem value={'OK'}>Oklahoma</MenuItem>
                                    <MenuItem value={'OR'}>Oregon</MenuItem>
                                    <MenuItem value={'PA'}>Pennsylvania</MenuItem>
                                    <MenuItem value={'RI'}>Rhode Island</MenuItem>
                                    <MenuItem value={'SC'}>South Carolina</MenuItem>
                                    <MenuItem value={'SD'}>South Dakota</MenuItem>
                                    <MenuItem value={'TE'}>Tennessee</MenuItem>
                                    <MenuItem value={'TX'}>Texas</MenuItem>
                                    <MenuItem value={'UT'}>Utah</MenuItem>
                                    <MenuItem value={'VT'}>Vermont</MenuItem>
                                    <MenuItem value={'VA'}>Virgina</MenuItem>
                                    <MenuItem value={'WA'}>Washington</MenuItem>
                                    <MenuItem value={'WV'}>West Virgina</MenuItem>
                                    <MenuItem value={'WI'}>Wisconsin</MenuItem>
                                    <MenuItem value={'WY'}>Wyoming</MenuItem>
                                </Select>
                            </FormControl>

                            <br/><br/>
                            <Button
                                style={{marginTop: '30px'}}
                                variant="contained"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.request(user);
                                }}
                            >
                                Submit
                            </Button>

                        </form>

                        <div>
                            {/*{console.log("props schools: ", this.props.schools)}*/}
                            <Typography style={{textAlign:'center'}}>{this.isolateSchools(this.props.schools)}</Typography>
                        </div>

                    </div>

                </Grid>

            </main>
        );
    }
}

const mapState = (state) => {
    const {schools} = state;
    // console.log("schools from state: ", schools);
    return {schools};
};

const mapDispatch = (dispatch) => {
    return {
        request: (user) => {
            dispatch(fetchData(user))
        },
        receive: (schools) => {
            dispatch(fetchSchools(schools))
        }
    }
}

export default connect(mapState, mapDispatch)(Start);