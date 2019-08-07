import React from  'react';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import GradCap from '../images/grad_cap.png';
import Grid from '@material-ui/core/Grid';

export default function HomeText() {

    return (
            <main>
                <Grid>
                    <Typography style={{marginBottom:'20px', marginTop:'100px', color:'#4e4f52', textAlign:'center', paddingTop:'5%', paddingLeft:'2%', paddingRight:'2%', fontFamily:'Helvetica', fontWeight:'bold'}} variant='h4'> Find Your College Match</Typography>

                    <div style={{margin:'auto', width:'250px', height:'250px'}}>
                        <Image src={GradCap}/>
                    </div>

                    <Typography paragraph style={{margin:'auto', paddingTop:'50px', paddingBottom:'5%', maxWidth:'60%', fontSize:'18px'}}>
                        <b>How it works:</b> We'll first start by asking a few questions about who you are and
                        where your academic, social, financial, and personal preferences lie when it comes to finding the perfect university for you. <br/><br/>
                        Using the information you provide, we'll compare your data with information provided by a database of university enrolled students to
                        generate a list of no more than 10 schools matching your criteria. We'll also produce the stats for each school,
                        showing where you fall among past students admitted to and/or attending the college.<br/><br/>
                        CATCH aims to help make finding the right educational institution simple and easy, which is why we believe that
                        limiting the number of schools catered to your needs is the way to go, as we pride quality over quantity. <br/><br/>
                    </Typography>
                </Grid>
            </main>
    );
}