import axios from 'axios'
import React from 'react'

// actions
export const REQUEST_DATA = "REQUEST_DATA"
export const RECEIVE_DATA = "RECEIVE_DATA"

// action creators
export const requestData = () => ({
    type: REQUEST_DATA
});

export const receiveData = data => ({
    type: RECEIVE_DATA,
    data: data
})

export const fetchData = (user) => {

    const API_KEY = 'kUJrADFpycHqGEUkL77Q4GuL5CfANxZKgk6QsZyJ';
    const sat = user.sat_score;
    const state = user.state;
    const degree = user.degree;
    let has_degree = '';
    const size = user.size;
    let URL = '';
    let act = user.act_score;
    let act_min = null;
    let act_max = null;
    let school_names = [];

    // accounting for the min and max possible act scores
    if (act < 5){
        act_min = 0;
    } else {
        act_min = act - 5;
    }

    if (act > 31){
        act_max = 36;
    } else {
        act_max = act + 5;
    }

    let act_range = `${act_min}..${act_max}`;

    // inclusive predominant degrees -> need to think about logic more
    if (degree === 2){
        has_degree = `${degree},3,4`;
    } else if (degree === 3){
        has_degree = `2,${degree},4`;
    } else {
        has_degree = `2,3,${degree}`;
    }

    // accounting for the student population ranges of college preference
    if (size === 'tiny'){
        URL = `https://api.data.gov/ed/collegescorecard/v1/schools?school.state=${state}&school.degrees_awarded.predominant=${has_degree},&latest.admissions.act_scores.midpoint.cumulative__range=${act_range}&latest.student.size__range=..1000&_page=0,1,2,&_per_page=100,&_fields=id,school.state,school.name,school.degrees_awarded.predominant_recoded,latest.admissions.sat_scores.average.overall,latest.admissions.act_scores.midpoint.cumulative,latest.student.size&api_key=${API_KEY}`;
    } else if (size === 'small'){
        URL = `https://api.data.gov/ed/collegescorecard/v1/schools?school.state=${state}&school.degrees_awarded.predominant=${has_degree},&latest.admissions.act_scores.midpoint.cumulative__range=${act_range}&latest.student.size__range=1000..5000&_page=0,1,2,&_per_page=100,&_fields=id,school.state,school.name,school.degrees_awarded.predominant_recoded,latest.admissions.sat_scores.average.overall,latest.admissions.act_scores.midpoint.cumulative,latest.student.size&api_key=${API_KEY}`;
    } else if (size === 'medium'){
        URL = `https://api.data.gov/ed/collegescorecard/v1/schools?school.state=${state}&school.degrees_awarded.predominant=${has_degree},&latest.admissions.act_scores.midpoint.cumulative__range=${act_range}&latest.student.size__range=5000..10000&_page=0,1,2,&_per_page=100,&_fields=id,school.state,school.name,school.degrees_awarded.predominant_recoded,latest.admissions.sat_scores.average.overall,latest.admissions.act_scores.midpoint.cumulative,latest.student.size&api_key=${API_KEY}`;
    } else if (size === 'large'){
        URL = `https://api.data.gov/ed/collegescorecard/v1/schools?school.state=${state}&school.degrees_awarded.predominant=${has_degree},&latest.admissions.act_scores.midpoint.cumulative__range=${act_range}&latest.student.size__range=10000..20000&_page=0,1,2,&_per_page=100,&_fields=id,school.state,school.name,school.degrees_awarded.predominant_recoded,latest.admissions.sat_scores.average.overall,latest.admissions.act_scores.midpoint.cumulative,latest.student.size&api_key=${API_KEY}`;
    } else if (size === 'huge'){
        URL = `https://api.data.gov/ed/collegescorecard/v1/schools?school.state=${state}&school.degrees_awarded.predominant=${has_degree},&latest.admissions.act_scores.midpoint.cumulative__range=${act_range}&latest.student.size__range=20000..&_page=0,1,2,&_per_page=100,&_fields=id,school.state,school.name,school.degrees_awarded.predominant_recoded,latest.admissions.sat_scores.average.overall,latest.admissions.act_scores.midpoint.cumulative,latest.student.size&api_key=${API_KEY}`;
    }

    console.log("User: ", user);

    return (dispatch) => {
        return axios.get(URL).then((response) => {
            const schools = response.data.results;
            // console.log("schools: ", schools);

            Object.keys(schools).map(function (key){
                school_names.push(schools[key]['school.name']);
                console.log("School:", schools[key]['school.name'], ", Size: ", schools[key]['latest.student.size'], ", ACT: ", schools[key]['latest.admissions.act_scores.midpoint.cumulative'], ", Degree: ", schools[key]['school.degrees_awarded.predominant_recoded']);
            })

            // console.log("names: ", school_names);
            // dispatch(requestData());
            dispatch(receiveData(school_names));
        })
    }

}

export const fetchSchools = (schools) => {
    return (dispatch) => {
        dispatch(receiveData(schools))
    }
}

// attendance.academic_year || attendance.program_year (average cost of attendance)