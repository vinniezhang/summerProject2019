import React from  'react';
import Typography from '@material-ui/core/Typography';
import isolateSchools from '../GettingStarted/GettingStarted';
import schools from '../GettingStarted/GettingStarted';
import Grid from '@material-ui/core/Grid';

export default function Results() {

    return (
        <main>
            <Typography style={{color:'#4e4f52', textAlign:'center', marginTop:'4%', paddingTop:'8%', fontFamily:'Helvetica', fontWeight:'bold'}} variant='h4'>Results</Typography>
            <Typography paragraph style={{margin:'auto', textAlign:'center', paddingTop:'50px', paddingBottom:'5%', maxWidth:'60%', fontSize:'18px'}}>
                Understanding your Results
            </Typography>

            <div>
            </div>
        </main>
    );
}